import React, { PropTypes } from 'react'
import Item from './item'

function TutorialsList (props) {
  return (
    <section>
      {props.tutorials.map(Item)}
    </section>
  )
}

TutorialsList.propTypes = {
  tutorials: PropTypes.array.isRequired
}

export default TutorialsList
