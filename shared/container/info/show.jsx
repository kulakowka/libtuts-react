import React, { Component, PropTypes } from 'react'
import Section from '../../components/section/section'
import { LiveItem } from '../../api/client'

function Page (props) {
  const content = () => ({__html: props.data.html})
  return <div dangerouslySetInnerHTML={content()}/>
}

class InfoContainer extends Component {
  render () {
    const params = this.props.params
    return (
      <Section>
        <LiveItem name='page' params={params} component={Page} />
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
