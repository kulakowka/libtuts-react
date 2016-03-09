import React, { Component } from 'react'
import ref from '../../utils/firebase'
import helpers from '../../utils/helpers'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

const queue = ref.child('search/tutorials')

class SearchContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      total: 0,
      tutorials: {}
    }
  }

  componentDidMount () {
    const reqRef = queue.child('requests').push({
      query: {
        match: {
          title: 'Tutorial'
          // keywords: this.props.location.query.keyword
        }
      }
    })

    const callback = (data) => {
      this.setState({
        total: data.total
      })
      let tutorials = {}
      Object.keys(data.index).forEach((key) => {
        ref.child('tutorials/' + key + '/data').on('value', (snap) => {
          let tutorial = snap.val()
          tutorials[key] = tutorial
          this.setState({tutorials})
          ref.child('users/' + tutorial.author + '/data').on('value', (snap) => {
            tutorials[key].author = snap.val()
            this.setState({tutorials})
          })
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
        <h1>Founded {total} tutorials</h1>
        <Tutorials tutorials={tutorials}/>
      </div>
    )
  }
}

reactMixin(SearchContainer.prototype, ReactFireMixin)

export default SearchContainer
