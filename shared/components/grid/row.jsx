import React from 'react'
import styles from './row.styl'

/**
 * <Row></Row>
 * <Row left></Row>
 * <Row right></Row>
 */
function Row (props) {
  const style = props.left
    ? styles.left
    : (
        props.right
        ? styles.rigth
        : styles.center
      )

  return (
    <div className={style}>
      {props.children}
    </div>
  )
}

export default Row
