import React, { Component, PropTypes } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import About from '../../components/users/about'
import Tutorials from '../../components/tutorials/list'
import Comments from '../../components/comments/list'

class UserContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      user: {},
      tutorials: [],
      comments: []
    }
  }

  componentDidMount () {
    const id = this.props.params.id

    this.bindAsObject(firebase.child('Users/' + id), 'user')
    this.bindAsArray(firebase.child('_user_tutorials/' + id), 'tutorials')
    this.bindAsArray(firebase.child('_user_comments/' + id), 'comments')
  }

  render () {
    return (
      <div>
        <About user={this.state.user}/>

        <h2>Tutorials</h2>
        <Tutorials tutorials={this.state.tutorials}/>

        <h2>Comments</h2>
        <Comments comments={this.state.comments}/>

      </div>
    )
  }
}

reactMixin(UserContainer.prototype, ReactFireMixin)

UserContainer.contextTypes = {
  router: PropTypes.object
}

UserContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default UserContainer
