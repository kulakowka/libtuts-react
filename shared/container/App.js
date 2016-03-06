import React, { Component, PropTypes } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './App.styl'

class App extends Component {
  // constructor (props, context) {
  //   super(props, context)
  // }

  render () {
    return (
      <div className={styles.root}>
        <Header/>
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
