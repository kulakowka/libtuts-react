import React from 'react'
import { Link } from 'react-router'

function Header (props, context) {
  return (
    <header>
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
