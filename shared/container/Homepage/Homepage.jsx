import React, { Component } from 'react'

class HomepageContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  render () {
    return (
      <div>
        Homepage
      </div>
    )
  }
}

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
