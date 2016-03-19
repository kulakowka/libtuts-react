import React, { Component } from 'react'
// import ref from '../../utils/firebase'
// import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'
import { FeedMixin } from '../../api/client'

class TutorialsContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.connectToFeed('tutorials')
  }

  render () {
    let tutorials = this.getArray()
    return <Tutorials tutorials={tutorials}/>
  }
}

reactMixin(TutorialsContainer.prototype, FeedMixin)

export default TutorialsContainer

