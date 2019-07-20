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

const alignCenter = {
  position: 'relative',
}

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }
    this.renderTasks = this.renderTasks.bind(this)
    this.doneTask = this.doneTask.bind(this)
    this.renderTasks()
  }

  doneTask(idTask) {
    alert(idTask)
  }

  renderTasks() {
    axios.get(URL).then(result => {
      const tasks = result.data.tasks.map((task, i) =>
        <div key={i} className="rowTask" style={alignCenter}>
          <span className="doneTask" onClick={() => this.doneTask(task._id)}><Done /></span>
          <Link to="/">
            <Row cols={[
              { text: task.name, size: '_4' },
              { text: <Profile src={task.sender.photo} />, size: '_2' },
              { text: task.project.name, size: '_2' },
              { text: <ProgressBar size="60%" text={brazilFormat(task.deadline) || 'Sem prazo'} />, size: '_2' }
            ]} />
          </Link>
        </div>
      )
      this.setState({
        ...this.state,
        tasks: tasks
      })
    })
  }

  render() {
    return (
      <div className="content">
        <Menu />
        <Header title="Minhas tarefas" />
        <main>
          <Tag text="Example" />
          <Tag text="Example" />
          <Tag text="Example" />
          <Tag text="Example" />
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