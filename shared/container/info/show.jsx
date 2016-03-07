import React, { Component, PropTypes } from 'react'
import firebase from '../../../utils/firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Section from '../../components/section/section'

class InfoContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      page: {}
    }
  }

  loadPage () {
    const page = this.props.params.page

    firebase.child('Pages/' + page).once('value').then((snap) => {
      this.setState({
        page: snap.val()
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.page !== this.props.params.page) this.loadPage()
  }

  componentDidMount () {
    this.loadPage()
  }

  render () {
    const content = () => ({__html: this.state.page})

    return (
      <Section>
        <div dangerouslySetInnerHTML={content()}/>
      </Section>
    )
  }
}

reactMixin(InfoContainer.prototype, ReactFireMixin)

InfoContainer.contextTypes = {
  router: PropTypes.object
}

InfoContainer.propTypes = {
  params: PropTypes.shape({
    page: PropTypes.string.isRequired
  }).isRequired
}

export default InfoContainer
