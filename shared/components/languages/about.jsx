import React, { PropTypes } from 'react'
import styles from './about.styl'
import helpers from '../../utils/helpers'

function AboutLanguage (props) {
  const slug = props.data.slug

  if (!slug) return <p>Loading...</p>

  const imgUrl = helpers.picUrl(slug)
  const {
    name,
    projectsCount,
    tutorialsCount
  } = props.data

  return (
    <div className={styles.about}>
      <h1>{name}</h1>
      <img src={imgUrl}/>
      <div className={styles.meta}>
        <p>{helpers.numeral(projectsCount)} projects</p>
        <p>{helpers.numeral(tutorialsCount)} tutorials</p>
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
