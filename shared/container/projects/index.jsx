import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Projects from '../../components/projects/list'

class ProjectsContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    this.bindAsArray(firebase.child('Projects'), 'projects')
  }

  render () {
    return <Projects projects={this.state.projects}/>
  }
}

reactMixin(ProjectsContainer.prototype, ReactFireMixin)

export default ProjectsContainer
