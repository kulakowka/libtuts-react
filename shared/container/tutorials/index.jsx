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
      tutorials: []
    }
  }

  loadTutorials () {
    const tutorialsRef = ref
    .child('Tutorials')
    .orderByChild('title')
    .limitToFirst(2)

    this.bindAsArray(tutorialsRef, 'tutorials')
  }

  componentDidMount () {
    this.loadTutorials()
  }

  onPrev (e) {
    e.preventDefault()

    let firstTitle = this.state.tutorials[0].title
    let lastTitle = this.state.tutorials[this.state.tutorials.length - 1].title

    console.log('firstTitle', firstTitle)
    console.log('lastTitle', lastTitle)

    this.unbind('tutorials')

    const tutorialsRef = ref
    .child('Tutorials')
    .orderByChild('title')
    .endAt(firstTitle)
    .limitToLast(2)

    this.bindAsArray(tutorialsRef, 'tutorials')
  }

  onNext (e) {
    e.preventDefault()

    let firstTitle = this.state.tutorials[0].title
    let lastTitle = this.state.tutorials[this.state.tutorials.length - 1].title

    console.log('firstTitle', firstTitle)
    console.log('lastTitle', lastTitle)

    this.unbind('tutorials')

    const tutorialsRef = ref
    .child('Tutorials')
    .orderByChild('title')
    .startAt(lastTitle)
    .limitToFirst(2)

    this.bindAsArray(tutorialsRef, 'tutorials')
  }

  render () {
    return <div>
      <Tutorials tutorials={this.state.tutorials}/>
      <button style={{float: 'left'}} onClick={this.onPrev.bind(this)}>prev</button>
      <button style={{float: 'right'}} onClick={this.onNext.bind(this)}>next</button>
    </div>
  }
}

reactMixin(TutorialsContainer.prototype, ReactFireMixin)

export default TutorialsContainer
