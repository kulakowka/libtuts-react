import React, { Component } from 'react'

class LanguagesIndexContainer extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  render () {
    return (
      <div>
        LanguagesIndex
      </div>
    )
  }
}

LanguagesIndexContainer.contextTypes = {
  router: React.PropTypes.object
}

export default LanguagesIndexContainer
