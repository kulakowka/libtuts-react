import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import { Link } from 'react-router'
import styles from '../../forms/default.styl'
import Section from '../../section/section'
import Button from '../../button/button'
import helpers from '../../../../utils/helpers'

class SignInForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      email: '',
      password: ''
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
            <input type='email' valueLink={this.linkState('email')} placeholder='Email' required autoComplete='off'/>
          </div>

          <div className={styles.field}>
            <input type='password' valueLink={this.linkState('password')} placeholder='Password' required autoComplete='off'/>
          </div>

          <div className={styles.fieldDescription}>
            <Link to={helpers.resetPasswordUrl()}>Forgot password?</Link>
          </div>

          <div className={styles.field}>
            <Button action wide loading={this.props.loading && 'Signing in...'} type='submit'>Sign in</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(SignInForm.prototype, LinkedStateMixin)

export default SignInForm
