import React from 'react'
import styles from './col.styl'

/**
 * <Col></Col>
 * <Col left></Col>
 * <Col right></Col>
 * <Col right size={1}></Col>
 * <Col right size={10}></Col>
 */
function Col (props) {
  const align = props.rigth
    ? styles.rigth
    : styles.left

  const size = (props.size && props.size > 0 && props.size <= 10)
    ? styles['size' + props.size]
    : styles['size10']

  return (
    <div className={styles.col + ' ' + align + ' ' + size}>
      {props.children}
    </div>
  )
}

export default Col
