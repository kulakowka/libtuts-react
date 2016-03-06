import React, { Component, PropTypes } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Firebase from 'firebase'
import styles from './App.css'

const ref = new Firebase('https://libtuts.firebaseio.com/')

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {user: null}
  }

  componentDidMount () {
    ref.child('Users/kulakowka').once('value', (snap) => {
      this.setState({
        user: snap.val()
      })
    })
  }

  render () {
    return (
      <div className={styles.root}>
        <Header/>
        <br/><br/>
        {this.state.user
          ? <p>{this.state.user.name}</p>
          : null}
        <br/><br/>
        {this.props.children}
        <br/><br/>
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
