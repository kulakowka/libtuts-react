import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'

function LanguageItem (props) {
  const id = props.slug
  const url = helpers.languageUrl(id)
  const imgUrl = helpers.picUrl(id)
  const {
    name,
    projectsCount,
    tutorialsCount
  } = props

  return (
    <div className={styles.item} key={id}>
      <Link to={url}><img src={imgUrl}/></Link>
      <h3><Link to={url}>{name}</Link></h3>
      <div className={styles.meta}>
        <Link to={url} title={helpers.numeral(tutorialsCount)}>{helpers.numeral(tutorialsCount)} tutorials</Link>
        <Link to={url} title={helpers.numeral(projectsCount)}>{helpers.numeral(projectsCount)} projects</Link>
      </div>
    </div>
  )
}

// LanguageItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   projectsCount: PropTypes.number,
//   tutorialsCount: PropTypes.number
// }

export default LanguageItem
