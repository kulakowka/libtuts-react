import React, { Component } from 'react'
import ref from '../../../utils/firebase'
import helpers from '../../../utils/helpers'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../../components/tutorials/list'

const queue = ref.child('search/tutorials')

class SearchContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      total: 0,
      tutorials: {}
    }
  }

  // componentWillReceiveProps (nextProps) {
  //   if (this.props.location.query.domain !== nextProps.location.query.domain) {
  //     this.state = {
  //       total: 0,
  //       tutorials: {}
  //     }
  //     this.search()
  //   }
  // }

  // componentWillUnmount () {

  // }

  componentDidMount () {
    this.search()
  }

  search () {
    var query = {
      term: {},
      multi_match: {}
    }

    if (this.props.location.query.domain) {
      query['term']['domain'] = this.props.location.query.domain
    }

    if (this.props.location.query.q) {
      query['multi_match'] = {
        query: this.props.location.query.q,
        fields: ['title', 'keywords']
      }
    }

    const reqRef = queue.child('requests').push({query})

    const callback = (data) => {
      this.setState({
        total: data.total
      })

      // Щас вроде работает, но надо еще поковырять, удалять слушатели событий например после каждого нового поиска и тд...
      let tutorials = {}
      Object.keys(data.index).forEach((key) => {
        ref.child('tutorials/' + key).on('value', (snap) => {
          let tutorial = snap.val()
          tutorials[key] = tutorial
          this.setState({tutorials})
        })
      })
    }

    queue.child('responses/' + reqRef.key()).on('value', function fn (snap) {
      if (snap.val()) {     // wait for data
        snap.ref().off('value', fn) // stop listening
        snap.ref().remove()         // clear the queue
        callback(snap.val())
      }
    })
  }

  render () {
    const total = this.state.total
    const tutorials = helpers.toArray(this.state.tutorials)

    return (
      <div>
        {tutorials.length
          ? <h1>{total} tutorials found</h1>
          : <h1>Search tutorials</h1>
        }

        <Tutorials tutorials={tutorials}/>
      </div>
    )
  }
}

reactMixin(SearchContainer.prototype, ReactFireMixin)

export default SearchContainer
