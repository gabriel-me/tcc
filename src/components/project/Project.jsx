import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Profile from '../utils/profile/Profile'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Done } from '../utils/icons/Icon'
import '../home/home.css'

let currentURL = ''
let projectId = ''

const alignCenter = {
  position: 'relative',
}

export default class Project extends Component {
  constructor(props) {
    super(props)
    currentURL = this.props.location.pathname
    projectId = currentURL.replace('/project/', '')
    this.state = { tasks: [], project: '' }
    this.renderTasks = this.renderTasks.bind(this)
    this.dateFormat = this.dateFormat.bind(this)
    this.doneTask = this.doneTask.bind(this)
    this.renderTasks()
  }

  dateFormat(date) {
    if (date) {
      date = new Date(date)
      const day = date.getDate().toString().padStart('2', '0')
      const month = date.getMonth().toString().padStart('2', '0')
      return `${day}/${month}`
    }
    return 'Sem prazo'
  }

  doneTask(taskName, taskDeadline) {
    const URL = 'http://localhost:8082/project/task'
    const body = { 
      taskName: taskName, 
      userId: window.localStorage.getItem('id'), 
      projectId: projectId,
      taskDeadline: taskDeadline
    }
    axios.put(URL, body).then(result => {
      this.renderTasks()
    })
  }

  renderTasks() {
    axios.get(`http://localhost:8082${currentURL}`).then(result => {
      let tasks = result.data.tasks 
      let aux = {}
      for (let x = 0; x < tasks.length; x++) {
        for (let i = x; i < tasks.length; i++) {
          if (tasks[x].deadline > tasks[i].deadline) {
            aux = tasks[x]
            tasks[x] = tasks[i]
            tasks[i] = aux
          }
        }
      }
      let rows = tasks.map((task, i) =>
        <div key={i} className="rowTask" style={alignCenter}>
          <span className="doneTask" onClick={() => this.doneTask(task.name, task.deadline)}><Done /></span>
            <Row cols={[
              { text: task.name, size: '_4' },
              { text: <Profile src={task.sender.photo} />, size: '_2' },
              { text: <Profile src={task.addressee.photo} />, size: '_2' },
              { text: <ProgressBar initialTime={task.createAt} finalTime={task.deadline} text={this.dateFormat(task.deadline)} />, size: '_2' }
            ]} />
        </div>)
      this.setState({
        ...this.state,
        tasks: rows,
        project: result.data.name
      })
    }) 
  }

  render() {
    return (
      <div className="content">
        <Menu />
        <Header title={this.state.project} />
        <main>
          <section>
            <Row position="first" cols={[
              { text: 'Tarefa', size: '_4' }, 
              { text: 'Responsável', size: '_2' }, 
              { text: 'Remetente', size: '_2' }, 
              { text: 'Prazo', size: '_2' }
            ]} />
            {this.state.tasks}
          </section>
        </main>
      </div>
    )
  }
}