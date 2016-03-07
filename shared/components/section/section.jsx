import React from 'react'
import styles from './section.styl'

function Section (props) {
  return (
    <section {...props} className={styles.section + ' ' + props.className}>
      {props.children}
    </section>
  )
}

export default Section
