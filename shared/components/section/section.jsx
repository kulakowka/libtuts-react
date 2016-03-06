import React from 'react'
import styles from './section.styl'

function Section (props) {
  return (
    <section className={styles.section}>
      {props.children}
    </section>
  )
}

export default Section
