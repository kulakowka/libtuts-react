import React, { Component, PropTypes } from 'react'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Form from '../../components/tutorials/form'
import Row from '../../components/grid/row'
import Col from '../../components/grid/col'
import { socket } from '../../api/client'

class NewTutorialContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      error: null,
      loading: false
    }
  }

  // componentDidMount () {
  //   if (!firebase.getAuth()) this.context.router.push('/')
  // }

  handleSubmit (data, event) {
    event.preventDefault()

    // data.languages = data.languages.map((language) => language.value)
    // console.log('data', data, event)

    this.setState({error: null, loading: true})

    socket.emit('tutorials:create', data, (err) => {
      if (err) return console.log('tutorials create error', err)
      this.context.router.push('/tutorials')
    })
  }

  // success (taskRef, snap) {
  //   taskRef.on('value', (snap) => {
  //     let key = snap.val().key
  //     if (key) {
  //       taskRef.off()
  //       this.context.router.push(helpers.tutorialUrl(key))
  //     }
  //   })
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
