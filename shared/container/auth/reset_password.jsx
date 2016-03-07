import React, { Component, PropTypes } from 'react'
import firebase from '../../../utils/firebase'
import { Link } from 'react-router'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/reset_password'
import helpers from '../../../utils/helpers'

class SignInContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false
    }
  }

  componentDidMount () {
    if (firebase.getAuth()) this.context.router.push('/')
  }

  handleSubmit (data, event) {
    event.preventDefault()

    this.setState({error: null, loading: true})

    firebase
    .resetPassword(data)
    .then(this.success.bind(this))
    .catch(this.fail.bind(this))
  }

  success (authData) {
    this.context.router.push('/')
  }

  fail (error) {
    this.setState({
      error: error.message,
      loading: false
    })
  }

  render () {
    return (
      <Row>
        <Col size={4}>
          <h1>Sign in to LibTuts</h1>
          <Form/>
          <p>New to LibTuts? <Link to={helpers.signUpUrl()}>Create an account</Link>.</p>
        </Col>
      </Row>
    )
  }
}

reactMixin(SignInContainer.prototype, ReactFireMixin)

SignInContainer.contextTypes = {
  router: PropTypes.object
}

export default SignInContainer
