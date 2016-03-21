import React, { Component, PropTypes } from 'react'
import About from '../../components/languages/about'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/list'
import { LiveItem } from '../../api/client'

class LanguageContainer extends Component {
  render () {
    const params = this.props.params

    return (
      <div>
        <LiveItem name='language' params={params} component={About} />

        {/*
        {this.state.tutorials.length
          ? <span>
            <h2>Latest {this.state.language.name} Tutorials</h2>
            <Tutorials tutorials={this.state.tutorials}/>
          </span> : null}

        {this.state.projects.length
          ? <span>
            <h2>Popular {this.state.language.name} Projects</h2>
            <Projects projects={this.state.projects}/>
          </span> : null}
        */}
      </div>
    )
  }
}

LanguageContainer.contextTypes = {
  router: PropTypes.object
}

LanguageContainer.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default LanguageContainer
