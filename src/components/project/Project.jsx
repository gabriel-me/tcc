import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Profile from '../utils/profile/Profile'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { brazilFormat } from '../utils/Date'
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
    this.renderTasks()
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
          <span className="status-task" style={{ backgroundColor: task.done ? '#00FF80' : '#FF0040'}}></span>
          <Link to={`/project/task/edit/${projectId}/${task._id}`}>
            <Row cols={[
              { text: task.name, size: '_4' },
              { text: <Profile src={task.addressee.photo} />, size: '_2' },
              { text: <Profile src={task.sender.photo} />, size: '_2' },
              { text: <ProgressBar initialTime={task.createAt} finalTime={task.deadline} text={(task.deadline) ? brazilFormat(task.deadline) : 'Sem prazo'} />, size: '_2' }
            ]} />
          </Link>
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