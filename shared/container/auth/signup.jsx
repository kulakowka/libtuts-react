import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/signup'
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

    socket.emit('auth:signup', data, (err) => {
      if (err) return console.log('signup error', err)
      this.context.router.push('/')
    })
  }

  // success () {
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
          <h1>Create your LibTuts account</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
          <p>Do you have an account? <Link to={helpers.signInUrl()}>Sign in</Link>.</p>
        </Col>
      </Row>
    )
  }
}

SignInContainer.contextTypes = {
  router: PropTypes.object
}

export default SignInContainer
