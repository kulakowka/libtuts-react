import React, { PropTypes } from 'react'
import Item from './item'

function CommentsList (props) {
  return (
    <div>
      {props.comments.map(Item)}
    </div>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsList
