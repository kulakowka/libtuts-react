import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import styles from '../forms/default.styl'
import Section from '../section/section'
import Button from '../button/button'

class ProjectForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      // name: 'Test',
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
            <input type='text' valueLink={this.linkState('name')} placeholder='Name' required autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <input type='text' valueLink={this.linkState('slug')} placeholder='Slug' autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <Button action loading={this.props.loading && 'Creating...'} type='submit'>Create</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(ProjectForm.prototype, LinkedStateMixin)

export default ProjectForm
