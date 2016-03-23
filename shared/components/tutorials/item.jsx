import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'
import TimeAgo from 'react-timeago'

function TutorialsItem (props) {
  const id = props.id
  const url = helpers.tutorialUrl(id)
  const {
    title,
    source,
    author,
    createdAt,
    domain,
    commentsCount
  } = props

  return (
    <div className={styles.item} key={id}>
      <h3>
        {source
          ? <a href={source} target='_blank'>{title}</a>
          : <Link to={url}>{title}</Link>
        }
      </h3>
      <div className={styles.meta}>
        <Link to={helpers.tutorialCommentsUrl(id)} title={helpers.numeral(commentsCount)}>
          {helpers.numeral(commentsCount)} comments
        </Link>

        <Link to={helpers.userUrl(author.username)}>
          {author.fullName || author.username}
        </Link>

        <Link to={url}>
          <TimeAgo date={createdAt} />
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
