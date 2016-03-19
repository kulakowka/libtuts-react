import React, { Component } from 'react'
import Tutorials from '../../components/tutorials/list'
import { LiveList } from '../../api/client'

class TutorialsContainer extends Component {
  render () {
    return (
      <LiveList name='tutorials' component={Tutorials} />
    )
  }
}

export default TutorialsContainer

