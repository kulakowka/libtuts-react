import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

class DomainContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: []
    }
  }

  componentDidMount () {
    const domain = this.props.params.domain
    this.bindAsArray(firebase.child('Tutorials').orderByChild('domain').equalTo(domain), 'tutorials')
  }

  render () {
    return <Tutorials tutorials={this.state.tutorials}/>
  }
}

reactMixin(DomainContainer.prototype, ReactFireMixin)

export default DomainContainer
