import React from 'react'
import Home from './Home'
import Main from './Main'
import { Switch, Route } from 'react-router-dom'

const MyApp = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/e' component={Main}/>
  	</Switch>	
)

export default MyApp;
