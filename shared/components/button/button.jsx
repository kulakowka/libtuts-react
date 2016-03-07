import React from 'react'
import { Link } from 'react-router'
import styles from './button.styl'

/**
 * <Button>Click me</Button>
 * <Button wide>Click me</Button>
 * <Button disabled>Click me</Button>
 * <Button action>Click me</Button>
 *
 * @param {[type]} props [description]
 */
function Button (props) {
  const width = props.wide ? styles.wide : ''
  const disabled = props.disabled ? styles.disabled : ''
  const action = props.action ? styles.action : ''
  const loading = props.loading ? styles.loading : ''
  const style = styles.btn + ' ' + width + ' ' + action + ' ' + loading + ' ' + disabled

  if (props.to) {
    return (
      <Link {...props} className={style}>
        {props.loading || props.children}
      </Link>
    )
  }

  return (
    <button {...props} disabled={props.disabled || props.loading} className={style}>
      {props.loading || props.children}
    </button>
  )
}

export default Button
