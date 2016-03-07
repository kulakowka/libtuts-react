import React, { Component, PropTypes } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Show from '../../components/tutorials/show'
import Comments from '../../components/comments/list'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'

class TutorialContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorial: {},
      comments: []
    }
  }

  componentDidMount () {
    const id = this.props.params.id

    this.bindAsObject(firebase.child('Tutorials/' + id), 'tutorial')
    this.bindAsArray(firebase.child('_tutorial_comments/' + id), 'comments')
  }

  render () {
    return (
      <Row>
        <Col size={8}>

          <Show tutorial={this.state.tutorial}/>

          <h2>Questions and discussion</h2>
          <Comments comments={this.state.comments}/>
        </Col>
      </Row>
    )
  }
}

reactMixin(TutorialContainer.prototype, ReactFireMixin)

TutorialContainer.contextTypes = {
  router: PropTypes.object
}

TutorialContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default TutorialContainer
