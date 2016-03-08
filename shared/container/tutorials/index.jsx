import React, { Component } from 'react'
import ref from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

class TutorialsContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: []
    }
  }

  componentDidMount () {
    const tutorialsRef = ref.child('Tutorials')
    this.bindAsArray(tutorialsRef, 'tutorials')
  }

  render () {
    this.state.tutorials.reverse()
    return <Tutorials tutorials={this.state.tutorials}/>
  }
}

reactMixin(TutorialsContainer.prototype, ReactFireMixin)

export default TutorialsContainer
