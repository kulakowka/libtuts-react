import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'
import numeral from 'numeral'

function LanguageItem (props) {
  const id = props.data.slug
  const url = helpers.languageUrl(id)
  const imgUrl = helpers.picUrl(id)
  const {
    name,
    projectsCount,
    tutorialsCount
  } = props.data

  return (
    <div className={styles.item} key={id}>
      <Link to={url}><img src={imgUrl}/></Link>
      <h3><Link to={url}>{name}</Link></h3>
      <div className={styles.meta}>
        <Link to={url} title={numeral(tutorialsCount).format('0,0')}>{numeral(tutorialsCount).format('0a')} tutorials</Link>
        <Link to={url} title={numeral(projectsCount).format('0,0')}>{numeral(projectsCount).format('0a')} projects</Link>
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
