import React from 'react'
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
function Dropdown (props) {
  const style = props.left
    ? styles.left
    : (
        props.right
        ? styles.rigth
        : styles.center
      )
  const state = 'open'

  return (
    <span className={styles.dropdown + ' ' + state}>
      <a className={styles.handle}>{props.handle}</a>
      <span className={styles.menu + ' ' + style}>
        {props.children}
      </span>
    </span>
  )
}

export default Dropdown
