import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import { Link } from 'react-router'
import styles from '../forms/default.styl'
import Section from '../section/section'
import Button from '../button/button'
import helpers from '../../utils/helpers'

class TutorialForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      // title: '',
      // source: '',
      // content: '',
      // keywords: [],
      languages: ['javascript']
      // projects: {}
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
            <input type='text' valueLink={this.linkState('title')} placeholder='Title' required autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <input type='text' valueLink={this.linkState('source')} placeholder='Source URL' autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <textarea valueLink={this.linkState('content')} placeholder='Content' rows='5'/>
          </div>

          <div className={styles.field}>
            <input type='text' valueLink={this.linkState('keywords')} placeholder='Keywords' autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <select type='text' multiple valueLink={this.linkState('languages')} placeholder='Languages'>
              <option value='javascript'>JavaScript</option>
              <option value='ruby'>Ruby</option>
            </select>
          </div>

          <div className={styles.field}>
            <Button action loading={this.props.loading && 'Publishing...'} type='submit'>Publish</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(TutorialForm.prototype, LinkedStateMixin)

export default TutorialForm
