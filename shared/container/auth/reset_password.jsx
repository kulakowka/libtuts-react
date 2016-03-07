import React, { Component, PropTypes } from 'react'
// import firebase from '../../../utils/firebase'
import { Link } from 'react-router'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/reset_password'
import helpers from '../../../utils/helpers'

class SignInContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  componentDidMount () {

  }

  render () {
    const content = () => ({__html: this.state.page})

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
