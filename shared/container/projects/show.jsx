import React, { Component, PropTypes } from 'react'
import About from '../../components/projects/about'
import Tutorials from '../../components/tutorials/list'
import { LiveItem } from '../../api/client'

class ProjectContainer extends Component {
  render () {
    const params = this.props.params

    return (
      <div>
        <LiveItem name='project' params={params} component={About} />

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

ProjectContainer.contextTypes = {
  router: PropTypes.object
}

ProjectContainer.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default ProjectContainer
