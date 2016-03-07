import React, { Component } from 'react'
import styles from './dropdown.styl'

/**
 * TODO: Надо сделать этот компонент
 *
 * <Dropdown handle="Menu" right>
 *   <Link to='/'>Home</Link>
 * </Dropdown>
 * <Dropdown handle="Menu" left>
 *   <Link to='/'>Home</Link>
 * </Dropdown>
 */
class Dropdown extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      open: false
    }
  }

  handleClick (event) {
    event.preventDefault()
    this.setState({open: true})
    let close = () => {
      console.log('close')
      this.setState({open: false})
      document.removeEventListener('click', close)
    }
    document.addEventListener('click', close)
  }

  render () {
    const style = this.props.left ? styles.left : (this.props.right ? styles.right : styles.center)
    const state = this.state.open ? styles.open : styles.closed

    return (
      <span className={styles.dropdown}>
        <a className={styles.handle} onClick={this.handleClick.bind(this)}>{this.props.handle}</a>
        <span className={styles.menu + ' ' + style + ' ' + state}>
          {this.props.children}
        </span>
      </span>
    )
  }
}

export default Dropdown
