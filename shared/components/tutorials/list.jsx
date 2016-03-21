import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function TutorialsList (props) {
  return (
    <Section>
      {props.data.map(Item)}
    </Section>
  )
}

TutorialsList.propTypes = {
  data: PropTypes.array.isRequired
}

export default TutorialsList
