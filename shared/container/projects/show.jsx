import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import About from '../../components/projects/about'
import Tutorials from '../../components/tutorials/list'

class ProjectContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      project: {},
      tutorials: []
    }
  }

  componentDidMount () {
    const id = this.props.params.id

    this.bindAsObject(firebase.child('projects/' + id), 'project')
    this.bindAsArray(firebase.child('project_tutorials/' + id), 'tutorials')
  }

  render () {
    return (
      <div>
        <About {...this.state.project}/>

        <h2>Popular {this.state.project.name} Tutorials</h2>
        <Tutorials tutorials={this.state.tutorials}/>
      </div>
    )
  }
}

reactMixin(ProjectContainer.prototype, ReactFireMixin)

export default ProjectContainer
