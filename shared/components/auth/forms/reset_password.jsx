import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import { Link } from 'react-router'
import styles from '../../forms/default.styl'
import Section from '../../section/section'
import Button from '../../button/button'
import helpers from '../../../../utils/helpers'

class ResetPasswordForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      email: ''
    }
  }

  render () {
    return (
      <Section>
        <form className={styles.form} onSubmit={this.props.onSubmit.bind(this, this.state)}>

          {this.props.error
            ? <div className={styles.fieldError}>{this.props.error}</div>
            : null}

          <div className={styles.fieldDescription}>
            Enter your email address and we will send you temporary password with which within 24 hours you will be able to log in and update your account.
          </div>

          <div className={styles.field}>
            <input type='email' valueLink={this.linkState('email')} placeholder='Email' required autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <Button action wide loading={this.props.loading && 'Resetting password...'} type='submit'>Reset password</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(ResetPasswordForm.prototype, LinkedStateMixin)

export default ResetPasswordForm
