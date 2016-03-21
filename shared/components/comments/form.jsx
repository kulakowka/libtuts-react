import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import styles from '../forms/default.styl'
import Button from '../button/button'
import Section from '../section/section'

class CommentForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      // title: 'Test',
      // source: '',
      // content: '',
      // keywords: [],
      // languages: ['ruby'] // ,
      // projects: ['react']
    }
  }
  render () {
    return (
      <Section>
        <form className={styles.form} onSubmit={this.props.onSubmit.bind(this, this.state)}>

          {this.props.error
            ? <div className={styles.fieldError}>{this.props.error}</div>
            : null}

          <div className={styles.field}>
            <textarea valueLink={this.linkState('content')} placeholder='Content' rows='5'/>
          </div>

          <div className={styles.field}>
            <Button action loading={this.props.loading && 'Writting...'} type='submit'>Write</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(CommentForm.prototype, LinkedStateMixin)

export default CommentForm
