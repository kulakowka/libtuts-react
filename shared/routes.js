import { Route, IndexRoute } from 'react-router'
import React from 'react'
import ResetPassword from './container/auth/reset_password'
import SignIn from './container/auth/signin'
import SignUp from './container/auth/signup'
import DomainShow from './container/domains/show'
import Homepage from './container/homepage/index'
import InfoPage from './container/info/show'
import LanguagesIndex from './container/languages/index'
import LanguageShow from './container/languages/show'
import ProjectsIndex from './container/projects/index'
import ProjectShow from './container/projects/show'
// import Settings from './container/settings/index'
// import TutorialEdit from './container/tutorials/edit'
import TutorialsIndex from './container/tutorials/index'
// import TutorialsNew from './container/tutorials/new'
import TutorialShow from './container/tutorials/show'
import UserShow from './container/users/show'
import Layout from './layouts/main'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Homepage} />
    
    <Route path='/auth/reset_password' component={ResetPassword}/>
    <Route path='/auth/signin' component={SignIn}/>
    <Route path='/auth/signup' component={SignUp}/>
    
    <Route path='/domain/:domain' component={DomainShow}/>
    <Route path='/info/:page' component={InfoPage}/>
    <Route path='/languages' component={LanguagesIndex}/>
    <Route path='/language/:id' component={LanguageShow}/>
    <Route path='/projects' component={ProjectsIndex}/>
    <Route path='/project/:id' component={ProjectShow}/>
    {/*
    <Route path='/settings' component={Settings}/>
    <Route path='/tutorial/:id/edit' component={TutorialEdit}/>
    */}
    <Route path='/tutorials' component={TutorialsIndex}/>
    {/*
    <Route path='/tutorials/new' component={TutorialsNew}/>
    */}
    <Route path='/tutorial/:id' component={TutorialShow}/>
    <Route path='/user/:id' component={UserShow}/>
  </Route>
)

export default routes
