import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Profile from '../utils/profile/Profile'
import Tag from '../utils/tag/Tag'
import axios from 'axios'

let currentURL = ''

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
    date = new Date(date)
    const day = date.getDate().toString().padStart('2', '0')
    const month = date.getMonth().toString().padStart('2', '0')
    return `${day}/${month}`
  }

  renderTasks() {
    axios.get(`http://localhost:8082${currentURL}`).then(result => {
      let rows = result.data.tasks.map((task, i) =>
        <Row key={i} cols={[
          { text: task.name, size: '_4' },
          { text: <Profile />, size: '_2' },
          { text: <Profile />, size: '_2' },
          { text: <ProgressBar size="60%" text={this.dateFormat(task.deadline)} />, size: '_2' }
        ]} />)
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