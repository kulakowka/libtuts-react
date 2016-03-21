import React, { Component, PropTypes } from 'react'
import Show from '../../components/tutorials/show'
import Comments from '../../components/comments/list'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { LiveItem, LiveList } from '../../api/client'

class TutorialContainer extends Component {
  render () {
    const params = this.props.params

    return (
      <Row>
        <Col size={8} left>
          <LiveItem name='tutorial' params={params} component={Show} />
          <h2>Questions and discussion</h2>
          {/*<LiveList name='comments' filter={filter} component={Comments} />*/}
        </Col>
      </Row>
    )
  }
}

TutorialContainer.contextTypes = {
  router: PropTypes.object
}

TutorialContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default TutorialContainer
