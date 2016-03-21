import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function LanguagesList (props) {
  return (
    <Section>
      {props.data.map(Item)}
    </Section>
  )
}

LanguagesList.propTypes = {
  data: PropTypes.array.isRequired
}

export default LanguagesList
