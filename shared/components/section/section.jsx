import React from 'react'
import styles from './section.styl'

function Section (props) {
  const style = props.center
    ? styles.center
    : (
        props.right
        ? styles.rigth
        : styles.left
      )

  return (
    <section {...props} className={styles.section + ' ' + style + ' ' + props.className}>
      {props.children}
    </section>
  )
}

export default Section
