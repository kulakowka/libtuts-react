import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Form from '../../components/tutorials/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'

class TutorialEditContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.id = this.props.params.id
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

    firebase
    .child('queue/tutorials/' + this.id).set(data)
    .then(this.success.bind(this))
    .catch(this.fail.bind(this))
  }

  success (snap) {
    // this.context.router.push('/')
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
          <h1>Edit tutorial</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} {...this.state}/>
        </Col>
      </Row>
    )
  }
}

reactMixin(TutorialEditContainer.prototype, ReactFireMixin)

export default TutorialEditContainer
