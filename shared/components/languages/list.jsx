import React, { PropTypes } from 'react'
import Item from './item'
import Section from '../section/section'

function LanguagesList (props) {
  return (
    <Section>
      {props.languages.map(Item)}
    </Section>
  )
}

LanguagesList.propTypes = {
  languages: PropTypes.array.isRequired
}

export default LanguagesList
