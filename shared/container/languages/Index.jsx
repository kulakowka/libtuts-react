import React, { Component } from 'react'
import Languages from '../../components/languages/list'
import { LiveList } from '../../api/client'

class LanguagesContainer extends Component {
  render () {
    return <LiveList name='languages' component={Languages} />
  }
}

export default LanguagesContainer
