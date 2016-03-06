import React, { Component } from 'react'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

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

  handleChange (event) {
    this.setState({name: event.target.value})
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
          <input placeholder='New language' value={this.state.name} onChange={this.handleChange.bind(this)}/>
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

HomepageContainer.contextTypes = {
  router: React.PropTypes.object
}

export default HomepageContainer
