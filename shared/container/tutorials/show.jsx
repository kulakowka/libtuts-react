import React, { Component, PropTypes } from 'react'
import Show from '../../components/tutorials/show'
import Comments from '../../components/comments/list'
import Form from '../../components/comments/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { LiveItem, LiveList, socket } from '../../api/client'

class TutorialContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false
    }
  }
  handleSubmit (data, event) {
    event.preventDefault()

    data.tutorialId = this.props.params.id

    this.setState({error: null, loading: true})

    socket.emit('create comment', data, (err) => {
      if (err) return console.log('tutorials create error', err)
      // this.context.router.push('/tutorials')
    })
  }

  render () {
    const params = this.props.params

    return (
      <Row>
        <Col size={8} left>
          <LiveItem name='tutorial' params={params} component={Show} />
          <h2>Questions and discussion</h2>
          <LiveList name='tutorial_comments' params={params} component={Comments} />
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
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
