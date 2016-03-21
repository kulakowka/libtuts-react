import React, { Component, PropTypes } from 'react'
import About from '../../components/users/about'
import Tutorials from '../../components/tutorials/list'
import Comments from '../../components/comments/list'
import { LiveItem, LiveList } from '../../api/client'

class UserContainer extends Component {
  render () {
    const params = this.props.params // { username: 'dsfs' }

    return (
      <div>
        <LiveItem name='user' params={params} component={About} />
        <h2>Tutorials</h2>
        <LiveList name='user_tutorials' params={params} component={Tutorials} />
        <h2>Comments</h2>
        <LiveList name='user_comments' params={params} component={Comments} />
      </div>
    )
  }
}

UserContainer.contextTypes = {
  router: PropTypes.object
}

UserContainer.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
}

export default UserContainer
