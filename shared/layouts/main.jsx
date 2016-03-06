import React, { Component, PropTypes } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import styles from './main.styl'

class MainLayout extends Component {
  render () {
    return <div className={styles.app}>
      <Header/>

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
