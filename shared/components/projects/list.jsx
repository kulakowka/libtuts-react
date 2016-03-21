import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function ProjectsList (props) {
  return (
    <Section>
      {props.data.map(Item)}
    </Section>
  )
}

ProjectsList.propTypes = {
  data: PropTypes.array.isRequired
}

export default ProjectsList
