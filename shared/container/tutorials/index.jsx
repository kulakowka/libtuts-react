import React, { Component } from 'react'
// import ref from '../../utils/firebase'
// import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'
import { FeedMixin } from '../../api/client'

class TutorialsContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: new Map()
    }
  }

  componentDidMount () {
    this.on('tutorials')
  }

  componentWillUnmount () {
    this.off('tutorials')
  }

  render () {
    let tutorials = this.getArray('tutorials', 'createdAt')

    return <Tutorials tutorials={tutorials}/>
  }
}

reactMixin(TutorialsContainer.prototype, FeedMixin)

export default TutorialsContainer

