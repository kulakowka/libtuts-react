import React, { Component } from 'react'
import Select from './select'

class SelectLanguages extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      options: [
        { value: 'c593046c-3e27-4eaa-8c82-6e6a3ce3426f', label: 'PHP' },
        { value: 'ad38bcf2-a526-48a0-8558-f2e91efda147', label: 'Go' },
        { value: '45241e78-fcb3-4b0d-bd7f-02c89c1dcdb5', label: 'JavaScript' }
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
