import React, { Component, PropTypes } from 'react'
import Form from '../../components/projects/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { socket } from '../../api/client'

class NewProjectContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false
    }
  }

  handleSubmit (data, event) {
    event.preventDefault()

    this.setState({error: null, loading: true})

    socket.emit('create project', data, (err) => {
      if (err) return console.log('projects create error', err)
      this.context.router.push('/projects')
    })
  }

  render () {
    return (
      <Row>
        <Col size={8} >
          <h1>Add project</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
        </Col>
      </Row>
    )
  }
}

NewProjectContainer.contextTypes = {
  router: PropTypes.object
}

export default NewProjectContainer
