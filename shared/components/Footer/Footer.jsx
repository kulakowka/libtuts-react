import React from 'react'
import { Link } from 'react-router'
import styles from './footer.styl'
import helpers from '../../../utils/helpers'

function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>&copy; {year} Libtuts, Inc.</div>
        <nav className={styles.mainMenu}>
          <Link to={helpers.infoPageUrl('terms')}>Terms</Link>
          <Link to={helpers.infoPageUrl('privacy')}>Privacy</Link>
          <Link to={helpers.infoPageUrl('security')}>Security</Link>
          <Link to={helpers.infoPageUrl('help')}>Help</Link>
        </nav>
        <nav className={styles.secondMenu}>
          <Link to={helpers.infoPageUrl('about')}>About</Link>
          <Link to={helpers.infoPageUrl('contact')}>Contact</Link>
          <a href='https://twitter.com/libtuts' target='_blank'>Twitter</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
