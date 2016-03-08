import React, { Component, PropTypes } from 'react'
import firebase from '../../utils/firebase'
import Firebase from 'firebase'
import helpers from '../../utils/helpers'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Form from '../../components/tutorials/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'

class NewTutorialContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false
    }
  }

  componentDidMount () {
    if (!firebase.getAuth()) this.context.router.push('/')
  }

  handleSubmit (data, event) {
    event.preventDefault()

    this.setState({error: null, loading: true})

    const taskRef = firebase.child('queue/tutorials/tasks').push()

    // add author to data
    data.author = firebase.getAuth().password.email.split('@')[0]

    taskRef.set(data)
    .then(this.success.bind(this, taskRef))
    .catch(this.fail.bind(this))
  }

  success (taskRef, snap) {
    taskRef.on('value', (snap) => {
      let key = snap.val().key
      if (key) {
        taskRef.off()
        console.log('можно редиректить на туториал /tutorials/%s ', key)
        this.context.router.push(helpers.tutorialUrl(key))
      }
    })
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
        <Col size={8} >
          <h1>Add tutorial</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
        </Col>
      </Row>
    )
  }
}

reactMixin(NewTutorialContainer.prototype, ReactFireMixin)

NewTutorialContainer.contextTypes = {
  router: PropTypes.object
}

export default NewTutorialContainer
