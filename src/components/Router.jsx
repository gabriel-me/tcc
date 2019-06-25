import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Task from '../components/task/Task'

export default props => (
  <BrowserRouter>
    <Switch name="http://localhost:3000">
      <Route path="/" exact={true} component={Home} />
      <Route path="/task" component={Task} />
    </ Switch>
  </ BrowserRouter>
)