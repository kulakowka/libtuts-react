import React, { Component } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Tutorials from '../../components/tutorials/list'

class SearchContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      tutorials: []
    }
  }

  componentDidMount () {
    const keyword = this.props.location.query.keyword
    console.log(keyword)
    this.bindAsArray(firebase.child('Tutorials'), 'tutorials')
  }

  render () {
    return <Tutorials tutorials={this.state.tutorials}/>
  }
}

reactMixin(SearchContainer.prototype, ReactFireMixin)

export default SearchContainer
