import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Button from '../../components/button/button'
import Section from '../../components/section/section'
import Form from '../../components/auth/forms/reset_password'
import helpers from '../../utils/helpers'

class SignInContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false,
      success: false
    }
  }

  handleSubmit (data, event) {
    event.preventDefault()

    this.setState({error: null, loading: true})

    // firebase
    // .resetPassword(data)
    // .then(this.success.bind(this))
    // .catch(this.fail.bind(this))
  }

  success (authData) {
    this.setState({
      error: null,
      loading: false,
      success: true
    })
  }

  fail (error) {
    this.setState({
      error: error.message,
      loading: false
    })
  }

  renderSuccess () {
    return (
      <Section left>
        <p>A temporary password has been sent to your email. If it doesn't appear within a few minutes, check your spam folder.</p>
        <Button to='/' wide action>Go to mainpage</Button>
      </Section>
    )
  }

  render () {
    return (
      <Row>
        <Col size={4}>
          <h1>Sign in to LibTuts</h1>
          {this.state.success
            ? this.renderSuccess()
            : <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>}
          <p>New to LibTuts? <Link to={helpers.signUpUrl()}>Create an account</Link>.</p>
        </Col>
      </Row>
    )
  }
}

// reactMixin(SignInContainer.prototype, ReactFireMixin)

SignInContainer.contextTypes = {
  router: PropTypes.object
}

export default SignInContainer
