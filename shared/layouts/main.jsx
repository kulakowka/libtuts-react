import React, { Component, PropTypes } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from './main.styl'
import { socket } from '../api/client'

class MainLayout extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      currentUser: null
    }

    this.authStateChange = () => {
      const currentUser = socket.getAuthToken()

      this.setState({
        currentUser
      })
    }
  }

  componentDidMount () {
    socket.on('authStateChange', this.authStateChange)
  }

  componentWillUnmount () {
    socket.off('authStateChange', this.authStateChange)
  }

  render () {
    return <div className={styles.app}>
      <Header currentUser={this.state.currentUser}/>

      <div className={styles.layout}>
        {this.props.children}
      </div>

      <Footer/>
    </div>
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default MainLayout
