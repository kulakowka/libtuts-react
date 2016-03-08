import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import About from '../../components/languages/about'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/list'

class LanguageContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      language: {},
      tutorials: [],
      projects: []
    }
  }

  componentDidMount () {
    const id = this.props.params.id

    this.bindAsObject(firebase.child('Languages/' + id), 'language')
    this.bindAsArray(firebase.child('_language_tutorials/' + id), 'tutorials')
    this.bindAsArray(firebase.child('_language_projects/' + id), 'projects')
  }

  render () {
    return (
      <div>
        <About language={this.state.language}/>

        <h2>Latest {this.state.language.name} Tutorials</h2>
        <Tutorials tutorials={this.state.tutorials}/>

        <h2>Popular {this.state.language.name} Projects</h2>
        <Projects projects={this.state.projects}/>
      </div>
    )
  }
}

reactMixin(LanguageContainer.prototype, ReactFireMixin)

export default LanguageContainer
