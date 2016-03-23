import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'

function ProjectItem (props) {
  const id = props.slug
  const url = helpers.projectUrl(id)
  const imgUrl = helpers.picUrl(id)
  const {
    name,
    tutorialsCount
  } = props

  //
  return (
    <div className={styles.item} key={id}>
      <Link to={url}><img src={imgUrl}/></Link>
      <h3><Link to={url}>{name}</Link></h3>
      <div className={styles.meta}>
        <Link to={url} title={helpers.numeral(tutorialsCount)}>{helpers.numeral(tutorialsCount)} tutorials</Link>
      </div>
    </div>
  )
}

// //
// ProjectItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   source: PropTypes.string,
//   author: PropTypes.string.isRequired,
//   createdAt: PropTypes.number.isRequired,
//   domain: PropTypes.string,
//   commentsCount: PropTypes.number
// }

export default ProjectItem
