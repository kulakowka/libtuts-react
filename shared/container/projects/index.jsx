import React, { Component } from 'react'
import Projects from '../../components/projects/list'
import { LiveList } from '../../api/client'

class ProjectsContainer extends Component {
  render () {
    return <LiveList name='projects' component={Projects} />
  }
}

export default ProjectsContainer
