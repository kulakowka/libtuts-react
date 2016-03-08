import React, { Component } from 'react'
import ref from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

class TutorialsContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      lastId: '',
      tutorials: [],
      items: []
    }
  }

  componentDidMount () {
    ref
    .child('items')
    .limitToLast(20)
    .on('child_added', (snap) => {
      console.log('componentDidMount.child_added', snap.val())
      let item = snap.val()
      item['.key'] = snap.key()
      let items = this.state.items
      items.push(item)

      this.setState({
        items
      })
    })

    // this.bindAsArray(tutorialsRef, 'tutorials')
  }

  loadMore (e) {
    e.preventDefault()

    console.log('this.state.items', this.state.items)

    let lastKey = this.state.items[this.state.items.length - 1]['.key']

    console.log('lastKey', lastKey)

    ref
    .child('items')
    // .orderByChild('createdAt')
    .orderByKey()
    .startAt(lastKey) // взять все начиная с createdAt = createdAt последнего в списке
    .limitToFirst(2) // взять первые 2
    .on('child_added', (snap) => {
      console.log('loadMore.child_added', snap.key())
      let item = snap.val()
      item['.key'] = snap.key()
      this.setState({
        items: this.state.items.concat(item)
      })
    })

    // let firstTitle = this.state.tutorials[0].title
    // let lastTitle = this.state.tutorials[this.state.tutorials.length - 1].title

    // console.log('firstTitle', firstTitle)
    // console.log('lastTitle', lastTitle)

    // this.unbind('tutorials')

    // const tutorialsRef = ref
    // .child('Tutorials')
    // .orderByChild('title')
    // .startAt(lastTitle)
    // .limitToFirst(2)

    // this.bindAsArray(tutorialsRef, 'tutorials')
  }

  render () {
    let items = this.state.items.map((item) => item)
    items.reverse()
    return <div>
      {/*<Tutorials tutorials={this.state.tutorials}/>*/}
      {items.map((item) => <p key={item['.key']}>#{item['.key']} ---- {item.createdAt}</p>)}
      <button onClick={this.loadMore.bind(this)}>load more...</button>
    </div>
  }
}

reactMixin(TutorialsContainer.prototype, ReactFireMixin)

export default TutorialsContainer
