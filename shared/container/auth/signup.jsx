import React, { Component, PropTypes } from 'react'
// import firebase from '../../utils/firebase'
import { Link } from 'react-router'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
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

  // componentDidMount () {
  //   if (firebase.getAuth()) this.context.router.push('/')
  // }

  handleSubmit (data, event) {
    event.preventDefault()

    this.setState({error: null, loading: true})

    socket.emit('signin', data, (err) => {
      if (err) {
        console.log('login error', err)
      }
      this.context.router.push('/')
    })
    // firebase
    // .createUser(data)
    // .then((authData) => firebase.authWithPassword(data))
    // .then(this.success.bind(this))
    // .catch(this.fail.bind(this))
  }

  success () {
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
          <h1>Create your LibTuts account</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
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
