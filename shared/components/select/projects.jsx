import React, { Component } from 'react'
import Select from './select'

class SelectProjects extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      options: [
        { value: 'efae62ec-11ea-4e51-b4c4-376ea3968c2a', label: 'React.js' },
        { value: 'f8929023-f31b-430e-bf2b-e97696103799', label: 'Babel.js' },
        { value: '9f7c841b-4de8-4fa2-bdd0-63540436357a', label: 'Passport.js' }
      ]
    }
  }

  render () {
    return (
      <Select
        options={this.state.options}
        {...this.props}
      />
    )
  }
}

export default SelectProjects
