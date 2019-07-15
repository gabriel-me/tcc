import React from 'react'
import axios from 'axios'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Tag from '../utils/tag/Tag'
import Profile from '../utils/profile/Profile'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }
    this.renderTasks = this.renderTasks.bind(this)
    this.dateFormat = this.dateFormat.bind(this)
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

  renderTasks() {
    axios.get(URL).then(result => {
      const tasks = result.data.tasks.map(task =>
        <Row key={task._id} cols={[
          { text: task.name, size: '_4' },
          { text: <Profile src={task.sender.photo} />, size: '_2' },
          { text: task.project.name, size: '_2' },
          { text: <ProgressBar size="60%" text={this.dateFormat(task.deadline)} />, size: '_2' }
        ]} />
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