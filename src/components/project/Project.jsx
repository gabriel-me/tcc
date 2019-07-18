import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Profile from '../utils/profile/Profile'
import Tag from '../utils/tag/Tag'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Done } from '../utils/icons/Icon'
import '../home/home.css'

let currentURL = ''

const alignCenter = {
  position: 'relative',
}

export default class Project extends Component {
  constructor(props) {
    super(props)
    currentURL = this.props.location.pathname
    this.state = { tasks: [], project: '' }
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

  doneTask(idTask) {
    alert(idTask)
  }

  renderTasks() {
    axios.get(`http://localhost:8082${currentURL}`).then(result => {
      let rows = result.data.tasks.map((task, i) =>
        <div key={i} className="rowTask" style={alignCenter}>
          <span className="doneTask" onClick={() => this.doneTask(task._id)}><Done /></span>
          <Link to="/">
            <Row cols={[
              { text: task.name, size: '_4' },
              { text: <Profile src={task.sender.photo} />, size: '_2' },
              { text: <Profile src={task.addressee.photo} />, size: '_2' },
              { text: <ProgressBar size="60%" text={this.dateFormat(task.deadline)} />, size: '_2' }
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
          <Tag text="tcc" />
          <Tag text="show" />
          <Tag text="viagem" />
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