import React, { PropTypes } from 'react'
import Item from './item'

function CommentsList (props) {
  return (
    <div>
      {props.data.map(Item)}
    </div>
  )
}

CommentsList.propTypes = {
  data: PropTypes.array.isRequired
}

export default CommentsList
