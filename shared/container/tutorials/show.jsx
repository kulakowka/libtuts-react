import React, { Component, PropTypes } from 'react'
import Show from '../../components/tutorials/show'
import Comments from '../../components/comments/list'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { LiveItem, LiveList } from '../../api/client'

class TutorialContainer extends Component {
  render () {
    const id = this.props.params.id

    return (
      <Row>
        <Col size={8} left>
          <LiveItem name='tutorial' id={id} component={Show} />
          <h2>Questions and discussion</h2>
          {/*<LiveList name='comments' tutorialId={id} component={Comments} />*/}
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
