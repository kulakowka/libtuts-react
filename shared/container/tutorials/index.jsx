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
    this.bindAsArray(ref.child('tutorials').limitToFirst(20), 'tutorials')
  }

  render () {
    return <Tutorials tutorials={this.state.tutorials}/>
  }
}

reactMixin(TutorialsContainer.prototype, ReactFireMixin)

export default TutorialsContainer
