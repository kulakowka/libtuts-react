import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/list'
import Languages from '../../components/languages/list'

class HomepageContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: [],
      projects: [],
      languages: []
    }
  }

  componentDidMount () {
    this.bindAsArray(firebase.child('Tutorials'), 'tutorials')
    this.bindAsArray(firebase.child('Projects'), 'projects')
    this.bindAsArray(firebase.child('Languages'), 'languages')
  }

  render () {
    return (
      <div>
        {this.state.tutorials.length
          ? <Tutorials tutorials={this.state.tutorials}/>
          : <p>loading...</p>}

        {this.state.projects.length
          ? <Projects projects={this.state.projects}/>
          : <p>loading...</p>}

        {this.state.languages.length
          ? <Languages languages={this.state.languages}/>
          : <p>loading...</p>}

      </div>
    )
  }
}

reactMixin(HomepageContainer.prototype, ReactFireMixin)
reactMixin(HomepageContainer.prototype, LinkedStateMixin)

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
