import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import About from '../../components/projects/about'
import Tutorials from '../../components/tutorials/list'
import { LiveItem } from '../../api/client'

class ProjectContainer extends Component {
  render () {
    const id = this.props.params.id

    return (
      <div>
        <LiveItem name='project' id={id} component={About} />

        {/*
        {this.state.tutorials.length
          ? <span>
            <h2>Popular {this.state.project.name} Tutorials</h2>
            <Tutorials tutorials={this.state.tutorials}/>
          </span> : null}
        */}
      </div>
    )
  }
}

reactMixin(ProjectContainer.prototype, ReactFireMixin)

export default ProjectContainer
