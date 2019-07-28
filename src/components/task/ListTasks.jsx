import React from 'react'
import axios from 'axios'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Tag from '../utils/tag/Tag'
import Profile from '../utils/profile/Profile'
import { Done }  from '../utils/icons/Icon'
import {Link} from 'react-router-dom'
import { brazilFormat } from '../utils/Date'
import '../home/home.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

let selectedTags = []
let notRun = true

const alignCenter = {
  position: 'relative',
}

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], tags: [] }
    this.selectedTag = this.selectedTag.bind(this)
    this.getDataUser = this.getDataUser.bind(this)
    this.renderTasks = this.renderTasks.bind(this)
    this.doneTask = this.doneTask.bind(this)
    this.renderProjectsTags = this.renderProjectsTags.bind(this)
    this.getDataUser()
  }

  getDataUser() {
    axios.get(URL).then(user => {
      if (notRun) {
        selectedTags = user.data.tasks.map(task => task.project.id)
        notRun = false
      }
      this.renderProjectsTags(user.data)
      this.renderTasks(user.data)
    })
  }

  selectedTag(projectId) {
    let projectTag = selectedTags.filter(id => id === projectId)
    if (projectTag.length === 0) 
      selectedTags.push(projectId)
    else 
      selectedTags = selectedTags.filter(id => id !== projectId)
    this.getDataUser()
  }

  renderProjectsTags(data) {
    const tags = data.projects.map((project, i) => 
      <span key={i} onClick={ () => this.selectedTag(project.id)}>
        <Tag selected="selected" text={project.name} />
      </span>
    ) 
    this.setState({
      ...this.state,
      tags: tags
    })
  }

  renderTasks(data) {
    const tasks = data.tasks.map((task, i) =>
      <React.Fragment key={i}>
        {(selectedTags.indexOf(task.id) !== -1) ?
          <div className="rowTask" style={alignCenter} >
            <span className="doneTask" onClick={() => this.doneTask(task._id)}><Done /></span>
            <Link to="/">
              <Row cols={[
                { text: task.name, size: '_4' },
                { text: <Profile src={task.sender.photo} />, size: '_2' },
                { text: task.project.name, size: '_2' },
                { text: <ProgressBar initialTime={task.createAt} finalTime={task.deadline} text={brazilFormat(task.deadline) || 'Sem prazo'} />, size: '_2' }
              ]} />
            </Link>
          </div>
        : '' }
      </React.Fragment>
    )
    this.setState({
      ...this.state,
      tasks: tasks
    })
  }

  doneTask(taskId) {
    const URL = 'http://localhost:8082/task'
    const body = { taskId: taskId, userId: window.localStorage.getItem('id') }
    axios.put(URL, body).then(result => {
      this.getDataUser()
    })
  }

  render() {
    return (
      <div className="content">
        <Menu />
        <Header title="Minhas tarefas" />
        <main>
          {this.state.tags}
          <Row position="first" cols={[
            { text: 'Tarefa', size: '_4' },
            { text: 'Remetente', size: '_2' },
            { text: 'Projeto', size: '_2' },
            { text: 'Prazo', size: '_2' }
          ]} />
          {this.state.tasks}
        </main>
      </div>
    )
  }
}