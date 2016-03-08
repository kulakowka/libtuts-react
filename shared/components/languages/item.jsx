import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'
import numeral from 'numeral'

function LanguageItem (props) {
  const id = props['.key']
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
        <Link to={url} title={numeral(tutorialsCount).format('0,0')}>{numeral(tutorialsCount).format('0a')} tutorials</Link>
        <Link to={url} title={numeral(projectsCount).format('0,0')}>{numeral(projectsCount).format('0a')} projects</Link>
      </div>
    </div>
  )
}

LanguageItem.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  domain: PropTypes.string,
  commentsCount: PropTypes.number
}

export default LanguageItem
