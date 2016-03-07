import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
import helpers from '../../../utils/helpers'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

const queue = firebase.child('search')

class SearchContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      total: 0,
      tutorials: []
    }
  }

  componentDidMount () {
    const reqRef = queue.child('request').push({
      index: 'libtuts',
      type: 'tutorials',
      query: {
        match: {
          keywords: this.props.location.query.keyword
        }
      }
    })

    const callback = (data) => {
      data.tutorials = helpers.addKey(data.tutorials)
      this.setState(data)
    }

    // this.bindAsObject(queue.child('response/' + reqRef.key() + '/total'), 'total')
    // this.bindAsArray(queue.child('response/' + reqRef.key() + '/tutorials'), 'tutorials')
    queue.child('response/' + reqRef.key()).on('value', function fn (snap) {
      if (snap.val()) {     // wait for data
        snap.ref().off('value', fn) // stop listening
        snap.ref().remove()         // clear the queue
        callback(snap.val())
      }
    })
  }

  render () {
    const total = this.state.total['.value']

    return (
      <div>
        <h1>Founded {total} tutorials</h1>
        <Tutorials tutorials={this.state.tutorials}/>
      </div>
    )
  }
}

reactMixin(SearchContainer.prototype, ReactFireMixin)

export default SearchContainer
