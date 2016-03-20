import React, { Component, PropTypes } from 'react'
import Section from '../../components/section/section'
import { LiveItem } from '../../api/client'

function Page (props) {
  const content = () => ({__html: props.html})
  return <div dangerouslySetInnerHTML={content()}/>
}

class InfoContainer extends Component {
  render () {
    const page = this.props.params.page
    return (
      <Section>
        <LiveItem name='page' id={page} component={Page} />
      </Section>
    )
  }
}

InfoContainer.contextTypes = {
  router: PropTypes.object
}

InfoContainer.propTypes = {
  params: PropTypes.shape({
    page: PropTypes.string.isRequired
  }).isRequired
}

export default InfoContainer
