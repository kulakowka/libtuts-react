import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './item.styl'
import helpers from '../../utils/helpers'
import moment from 'moment'
import Section from '../section/section'

function CommentsItem (props) {
  console.log(props)
  const id = props.id

  const {
    contentHtml,
    author,
    createdAt,
    tutorial
  } = props

  const getContent = () => ({__html: contentHtml})

  return (
    <Section className={styles.item} id={'comment_' + id} key={id}>
      <div className={styles.meta}>
        <Link className={styles.creator} to={helpers.userUrl(author.username)}>{author.fullName || author.username}</Link>
        <Link to={helpers.commentUrl(tutorial, id)}>{moment(createdAt).fromNow()}</Link>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={getContent()}/>
    </Section>
  )
}

// CommentsItem.propTypes = {
//   contentHtml: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   createdAt: PropTypes.number.isRequired,
//   tutorial: PropTypes.string.isRequired
// }

export default CommentsItem
