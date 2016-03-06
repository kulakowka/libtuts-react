import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../../utils/helpers'
import moment from 'moment'

function CommentsItem (props) {
  const id = props['.key']

  const {
    contentHtml,
    author,
    createdAt,
    tutorial
  } = props

  const content = () => ({__html: contentHtml})

  return (
    <section className={styles.item} id={'comment_' + id} key={id}>
      <div className={styles.meta}>
        <Link className={styles.creator} to={helpers.userUrl(author)}>{author}</Link>
        <Link to={helpers.commentUrl(tutorial, id)}>{moment(createdAt).fromNow()}</Link>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={content()}/>
    </section>
  )
}

CommentsItem.propTypes = {
  contentHtml: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  tutorial: PropTypes.string.isRequired
}

export default CommentsItem
