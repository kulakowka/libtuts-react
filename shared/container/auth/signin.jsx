import React, { Component, PropTypes } from 'react'
import firebase from '../../utils/firebase'
import { Link } from 'react-router'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import Form from '../../components/auth/forms/signin'
import helpers from '../../utils/helpers'
// import request from 'request'

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

    // request({
    //   uri: 'http://localhost:3000/api/v1/auth/local',
    //   json: data
    // }, (err, res, body) => {
    //   console.log('success', err, body)
    // })
    firebase
    .authWithPassword(data)
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
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
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
