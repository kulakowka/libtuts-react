import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './container/App'
import Homepage from './container/Homepage/Homepage'
import LanguagesIndex from './container/Languages/LanguagesIndex'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Homepage} />
    <Route path='/languages' component={LanguagesIndex}/>
  </Route>
)

export default routes
