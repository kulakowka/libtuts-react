import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/signin'
import helpers from '../../utils/helpers'
import { socket } from '../../api/client'

class SignInContainer extends Component {
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

    socket.emit('auth:signin', data, (err) => {
      if (err) return console.log('signin error', err)
      this.context.router.push('/')
    })
  }

  // success (authData) {
  //   this.context.router.push('/')
  // }

  // fail (error) {
  //   this.setState({
  //     error: error.message,
  //     loading: false
  //   })
  // }

  render () {
    return (
      <Row>
        <Col size={4}>
          <h1>Sign in to LibTuts</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
          <p>New to LibTuts? <Link to={helpers.signUpUrl()}>Create an account</Link>.</p>
        </Col>
      </Row>
    )
  }
}

SignInContainer.contextTypes = {
  router: PropTypes.object
}

export default SignInContainer
