import React, { Component, PropTypes } from 'react'
import About from '../../components/users/about'
import Tutorials from '../../components/tutorials/list'
import Comments from '../../components/comments/list'
import { LiveItem, LiveList } from '../../api/client'

class UserContainer extends Component {
  render () {
    const params = this.props.params
    
    return (
      <div>
        <LiveItem name='user' params={params} component={About} />

        {/*
        <About {...this.state.user}/>

        {this.state.tutorials.length
          ? <span>
            <h2>Tutorials</h2>
            <Tutorials tutorials={this.state.tutorials}/>
          </span> : null}

        {this.state.comments.length
          ? <span>
            <h2>Comments</h2>
            <Comments comments={this.state.comments}/>
          </span> : null}
        */}
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
