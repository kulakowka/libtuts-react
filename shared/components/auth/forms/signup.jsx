import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import { Link } from 'react-router'
import styles from '../../forms/default.styl'
import Section from '../../section/section'
import Button from '../../button/button'
import helpers from '../../../../utils/helpers'

class SignUpForm extends Component {
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

          <div className={styles.fieldDescription}>
            You will occasionally receive account related emails. We promise not to share your email with anyone.
          </div>

          <div className={styles.field}>
            <input type='password' valueLink={this.linkState('password')} placeholder='Password' required autoComplete='off'/>
          </div>
          <div className={styles.fieldDescription}>
            Use at least one lowercase letter, one numeral, and seven characters.
          </div>

          <div className={styles.fieldDescription}>
            By clicking on "Create an account" below, you are agreeing to the <Link to={helpers.infoPageUrl('terms')}>Terms of Service</Link> and the <Link to={helpers.infoPageUrl('privacy')}>Privacy Policy</Link>.
          </div>

          <div className={styles.field}>
            <Button action wide loading={this.props.loading && 'Creating an account...'} type='submit'>Create an account</Button>
          </div>
        </form>
      </Section>
    )
  }
}

reactMixin(SignUpForm.prototype, LinkedStateMixin)

export default SignUpForm
