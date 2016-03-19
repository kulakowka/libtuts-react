import React, { Component } from 'react'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/list'
import Languages from '../../components/languages/list'
import { LiveList } from '../../api/client'

class HomepageContainer extends Component {
  render () {
    return (
      <Row>
        <Col size={2}>
          <LiveList name='projects' component={Projects} />
        </Col>
        <Col size={5}>
          <LiveList name='tutorials' component={Tutorials} />
        </Col>
        <Col size={3}>
          <LiveList name='languages' component={Languages} />
        </Col>
      </Row>
    )
  }
}

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
