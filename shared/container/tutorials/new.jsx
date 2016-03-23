import React, { Component, PropTypes } from 'react'
import Form from '../../components/tutorials/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { socket } from '../../api/client'

class NewTutorialContainer extends Component {
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

    if (data.keywords) data.keywords = data.keywords.split(',')
    if (data.languages) data.languages = data.languages.map((language) => language.value)
    if (data.projects) data.projects = data.projects.map((project) => project.value)

    socket.emit('create tutorial', data, (err) => {
      if (err) return console.log('tutorials create error', err)
      this.context.router.push('/tutorials')
    })
  }

  render () {
    return (
      <Row>
        <Col size={8} >
          <h1>Add tutorial</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
        </Col>
      </Row>
    )
  }
}

NewTutorialContainer.contextTypes = {
  router: PropTypes.object
}

export default NewTutorialContainer
