import React, { Component } from 'react'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

const ref = new Firebase('https://libtuts.firebaseio.com/')

class HomepageContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: '',
      languages: []
    }
  }

  componentDidMount () {
    this.bindAsArray(ref.child('Languages'), 'languages')
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.state.name === '') return false
    this.firebaseRefs.languages.update({
      [this.state.name]: {
        name: this.state.name
      }
    })
    this.setState({name: ''})
  }

  renderLanguage (language) {
    return <li key={language['.key']}>{language.name}</li>
  }

  render () {
    return (
      <div>
        Homepage
        <div>
          <input placeholder='New language' valueLink={this.linkState('name')}/>
          <button onClick={this.handleSubmit.bind(this)}>create</button>
        </div>
        <br/>
        <ul>
          {this.state.languages.map(this.renderLanguage)}
        </ul>
      </div>
    )
  }
}

reactMixin(HomepageContainer.prototype, ReactFireMixin)
reactMixin(HomepageContainer.prototype, LinkedStateMixin)

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
