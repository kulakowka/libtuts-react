import React from 'react'
import { Link } from 'react-router'
import styles from './header.styl'
import helpers from '../../../utils/helpers'
import firebase from '../../../utils/firebase'
import Dropdown from '../dropdown/dropdown'

function Header (props, context) {
  const currentUser = firebase.getAuth()
  if (currentUser) currentUser.username = currentUser.password.email.split('@')[0]

  const logout = () => firebase.unauth()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to='/' className={styles.siteName}>Library Tutorials</Link>

        <nav className={styles.mainMenu}>
          <Link className={styles.item} to={helpers.tutorialsUrl()}>Tutorials</Link>
          <Link className={styles.item} to={helpers.projectsUrl()}>Projects</Link>
          <Link className={styles.item} to={helpers.languagesUrl()}>Languages</Link>
        </nav>

        {currentUser ? (
          <nav className={styles.userMenu}>
            <Link className={styles.item} to={helpers.addTutorialUrl()}>Add Tutorial</Link>
            <Dropdown handle={currentUser.username} right>
              <Link to={helpers.userUrl(currentUser.username)}>{currentUser.username}</Link>
              <Link to={helpers.settingsUrl()}>Settings</Link>
              <a onClick={logout}>Sign Out</a>
            </Dropdown>
          </nav>
        ) : (
          <nav className={styles.guestMenu}>
            <Dropdown handle='Sign in' right>
              <Link to={helpers.signInUrl()}>Sign in</Link>
              <Link to={helpers.signUpUrl()}>Sign up</Link>
            </Dropdown>
          </nav>
        )}
      </div>
    </header>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header


// <h1><Link to='/'>LibTuts</Link></h1>
//       {context.router.isActive('/', true)
//          ? <Link to='/languages'>Languages</Link>
//          : null}