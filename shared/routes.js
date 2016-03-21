import { Route, IndexRoute } from 'react-router'
import React from 'react'

import ResetPassword from './container/auth/reset_password'
import SignIn from './container/auth/signin'
import SignUp from './container/auth/signup'

import Homepage from './container/homepage/index'

import InfoPage from './container/info/show'

import LanguagesIndex from './container/languages/index'
import LanguagesNew from './container/languages/new'
import LanguageShow from './container/languages/show'

import ProjectsIndex from './container/projects/index'
import ProjectsNew from './container/projects/new'
import ProjectShow from './container/projects/show'

import SearchTutorialsIndex from './container/search/tutorials/index'

import TutorialsIndex from './container/tutorials/index'
import TutorialsNew from './container/tutorials/new'
import TutorialShow from './container/tutorials/show'
import TutorialEdit from './container/tutorials/edit'

import UserShow from './container/users/show'

import Layout from './layouts/main'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Homepage} />

    <Route path='/auth/reset_password' component={ResetPassword}/>
    <Route path='/auth/signin' component={SignIn}/>
    <Route path='/auth/signup' component={SignUp}/>

    <Route path='/info/:page' component={InfoPage}/>

    <Route path='/languages/new' component={LanguagesNew}/>
    <Route path='/languages' component={LanguagesIndex}/>
    <Route path='/language/:slug' component={LanguageShow}/>

    <Route path='/projects/new' component={ProjectsNew}/>
    <Route path='/projects' component={ProjectsIndex}/>
    <Route path='/project/:slug' component={ProjectShow}/>

    <Route path='/search/tutorials' component={SearchTutorialsIndex}/>

    <Route path='/tutorials/new' component={TutorialsNew}/>
    <Route path='/tutorials' component={TutorialsIndex}/>
    <Route path='/tutorial/:id' component={TutorialShow}/>
    <Route path='/tutorial/:id/edit' component={TutorialEdit}/>

    <Route path='/user/:username' component={UserShow}/>
  </Route>
)

export default routes
