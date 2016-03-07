import React, { Component, PropTypes } from 'react'
// import firebase from '../../../utils/firebase'
import { Link } from 'react-router'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/signup'
import helpers from '../../../utils/helpers'

class SignInContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  componentDidMount () {

  }

  render () {
    return (
      <Row>
        <Col size={4}>
          <h1>Create your LibTuts account</h1>
          <Form/>
          <p>Do you have an account? <Link to={helpers.signInUrl()}>Sign in</Link>.</p>
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
