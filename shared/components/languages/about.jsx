import React, { PropTypes } from 'react'
import styles from './about.styl'
import helpers from '../../utils/helpers'
import numeral from 'numeral'

function AboutLanguage (props) {
  
  const id = props.id

  if (!id) return <p>Loading...</p>

  const imgUrl = helpers.picUrl(id)
  const {
    name,
    projectsCount,
    tutorialsCount
  } = props

  return (
    <div className={styles.about} key={id}>
      <h1>{name}</h1>
      <img src={imgUrl}/>
      <div className={styles.meta}>
        <p>{numeral(projectsCount).format('0,0')} projects</p>
        <p>{numeral(tutorialsCount).format('0,0')} tutorials</p>
      </div>
    </div>
  )
}

// AboutLanguage.propTypes = {
//   title: PropTypes.string.isRequired,
//   source: PropTypes.string,
//   author: PropTypes.string.isRequired,
//   createdAt: PropTypes.number.isRequired,
//   domain: PropTypes.string,
//   commentsCount: PropTypes.number
// }

export default AboutLanguage
