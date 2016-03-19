import React, { Component, PropTypes } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Show from '../../components/tutorials/show'
import Comments from '../../components/comments/list'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { LiveItem } from '../../api/client'

class TutorialContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  //   this.state = {
  //     tutorial: {},
  //     tutorial_content: {},
  //     comments: []
  //   }
  // }

  // componentDidMount () {
  //   const id = this.props.params.id

  //   // this.bindAsObject(firebase.child('tutorials/' + id), 'tutorial')
  //   // this.bindAsObject(firebase.child('tutorial_content/' + id + '/html'), 'tutorial_content')
  //   // this.bindAsArray(firebase.child('tutorial_projects/' + id), 'tutorial_projects')
  //   // this.bindAsArray(firebase.child('tutorial_languages/' + id), 'tutorial_languages')
  //   // this.bindAsArray(firebase.child('tutorial_comments/' + id), 'comments')
  // }

  render () {
    // let tutorial = this.state.tutorial

    // tutorial.content = this.state.tutorial_content['.value']
    // tutorial.projects = this.state.tutorial_projects
    // tutorial.languages = this.state.tutorial_languages
    const id = this.props.params.id

    return (
      <Row>
        <Col size={8} left>
          <LiveItem name='tutorial' id={id} component={Show} />
          {/*
          <Show {...tutorial}/>
          <h2>Questions and discussion</h2>
          <Comments comments={this.state.comments}/>
          */}
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
