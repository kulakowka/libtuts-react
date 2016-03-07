import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
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
    this.bindAsArray(firebase.child('Tutorials'), 'tutorials')
    this.bindAsArray(firebase.child('Projects'), 'projects')
    this.bindAsArray(firebase.child('Languages'), 'languages')
  }

  render () {
    return (
      <div>
        <Row left>
          <Col>
            <Tutorials tutorials={this.state.tutorials}/>
          </Col>
        </Row>
        <Row left>
          <Col>
            <Projects projects={this.state.projects}/>
            <Languages languages={this.state.languages}/>
          </Col>
        </Row>
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
