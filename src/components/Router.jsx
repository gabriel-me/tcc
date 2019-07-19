import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Task from '../components/task/Task'
import AddTask from '../components/task/AddTask'
import ListTasks from '../components/task/ListTasks'
import Login from '../components/login/Template'
import Project from '../components/project/Project'
import AddProject from '../components/project/AddProject'
import AddUser from '../components/user/AddUser'
import ListUser from '../components/user/ListFriend'
import Profile from '../components/user/Profile'

export default () => (
  <BrowserRouter>
    <Switch name="http://localhost:3000">
      <Route path="/" exact component={Login} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/task" exact component={ListTasks} />
      <Route path="/task/add" exact component={AddTask} />
      <Route path="/task/:id" component={Task} />
      <Route path="/project/add" exact component={AddProject} />
      <Route path="/project/:id" component={Project} />
      <Route path="/user" exact component={ListUser} />
      <Route path="/user/add" exact component={AddUser} />
      <Route path="/user/:id" component={Profile} />
    </ Switch>
  </ BrowserRouter>
)