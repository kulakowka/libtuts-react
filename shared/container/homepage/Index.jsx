import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
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
    this.bindAsArray(firebase.child('tutorials').limitToFirst(13), 'tutorials')
    this.bindAsArray(firebase.child('projects').limitToFirst(12), 'projects')
    this.bindAsArray(firebase.child('languages').limitToFirst(12), 'languages')
  }

  render () {
    return (
      <Row>
        <Col size={2}>
          {this.state.projects.length
            ? <Projects projects={this.state.projects}/>
            : <p>loading...</p>}
        </Col>
        <Col size={5}>
          {this.state.tutorials.length
            ? <Tutorials tutorials={this.state.tutorials}/>
            : <p>loading...</p>}
        </Col>
        <Col size={3}>
          {this.state.languages.length
            ? <Languages languages={this.state.languages}/>
            : <p>loading...</p>}
        </Col>
      </Row>
    )
  }
}

reactMixin(HomepageContainer.prototype, ReactFireMixin)
reactMixin(HomepageContainer.prototype, LinkedStateMixin)

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
