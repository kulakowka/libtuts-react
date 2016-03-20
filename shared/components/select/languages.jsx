import React, { Component } from 'react'
import Select from './select'

class SelectLanguages extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      options: [
        { value: '436a1e71-c0ff-41da-abb5-989e05d3e71b', label: 'JavaScript' },
        { value: '1d93addb-3c66-42b4-a176-9ffdd19a8cd0', label: 'C++' },
        { value: 'a677af53-b077-4c27-90bc-d35e01f93bb2', label: 'Ruby' }
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
