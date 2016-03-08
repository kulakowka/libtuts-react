import React, { Component } from 'react'
import Select from './select'

class SelectLanguages extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      options: [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'php', label: 'PHP' },
        { value: 'go', label: 'Go' }
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

export default SelectLanguages
