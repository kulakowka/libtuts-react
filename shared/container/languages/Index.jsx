import React, { Component } from 'react'
import firebase from '../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Languages from '../../components/languages/list'

class LanguagesContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      languages: []
    }
  }

  componentDidMount () {
    this.bindAsArray(firebase.child('languages').limitToFirst(30), 'languages')
  }

  render () {
    return <Languages languages={this.state.languages}/>
  }
}

reactMixin(LanguagesContainer.prototype, ReactFireMixin)

export default LanguagesContainer
