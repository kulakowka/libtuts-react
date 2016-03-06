import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function TutorialsList (props) {
  return (
    <Section>
      {props.tutorials.map(Item)}
    </Section>
  )
}

TutorialsList.propTypes = {
  tutorials: PropTypes.array.isRequired
}

export default TutorialsList
