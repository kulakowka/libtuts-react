import React from 'react'
import { Link } from 'react-router'
import styles from './header.styl'

function Header (props, context) {
  return (
    <header className={styles.header}>
      <h1><Link to='/'>LibTuts</Link></h1>
      {context.router.isActive('/', true)
         ? <Link to='/languages'>Languages</Link>
         : null}
    </header>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header
