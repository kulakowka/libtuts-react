import React, { Component, PropTypes } from 'react'
import Form from '../../components/languages/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { socket } from '../../api/client'

class NewLanguageContainer extends Component {
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

    socket.emit('create language', data, (err) => {
      if (err) return console.log('languages create error', err)
      this.context.router.push('/languages')
    })
  }

  render () {
    return (
      <Row>
        <Col size={8} >
          <h1>Add language</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
        </Col>
      </Row>
    )
  }
}

NewLanguageContainer.contextTypes = {
  router: PropTypes.object
}

export default NewLanguageContainer
