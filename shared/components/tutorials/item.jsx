import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'
import numeral from 'numeral'
import moment from 'moment'

function TutorialsItem (props) {
  const id = props.data.id
  const url = helpers.tutorialUrl(id)
  const {
    title,
    source,
    author,
    createdAt,
    domain,
    commentsCount
  } = props.data

  return (
    <div className={styles.item} key={id}>
      <h3>
        {source
          ? <a href={source} target='_blank'>{title}</a>
          : <Link to={url}>{title}</Link>
        }
      </h3>
      <div className={styles.meta}>
        <Link to={helpers.tutorialCommentsUrl(id)} title={numeral(commentsCount).format('0,0')}>
          {numeral(commentsCount).format('0a')} comments
        </Link>

        <Link to={helpers.userUrl(author.username)}>
          {author.fullName || author.username}
        </Link>

        <Link to={url}>
          {moment(createdAt).fromNow()}
        </Link>

        {domain
          ? <Link to={helpers.domainUrl(domain)}>{domain}</Link>
          : null
        }
      </div>
    </div>
  )
}

TutorialsItem.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  domain: PropTypes.string,
  commentsCount: PropTypes.number
}

export default TutorialsItem
