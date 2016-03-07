import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function ProjectsList (props) {
  return (
    <Section>
      {props.projects.map(Item)}
    </Section>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectsList
