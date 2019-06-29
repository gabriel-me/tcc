import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Task from '../components/task/Task'
import Login from '../components/login/Template'

export default () => (
  <BrowserRouter>
    <Switch name="http://localhost:3000">
      <Route path="/" exact={true} component={Login} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/task" component={Task} />
    </ Switch>
  </ BrowserRouter>
)