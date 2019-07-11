import React from 'react'
import axios from 'axios'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Project from '../utils/quadrat/Quadrat'
import './home.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], projects: [] }
    this.renderProjectsAndTasks = this.renderProjectsAndTasks.bind(this)
    this.dateFormat = this.dateFormat.bind(this)
    this.renderProjectsAndTasks()
  }

  dateFormat(date) {
    date = new Date(date)
    const day = date.getDate().toString().padStart('2', '0')
    const month = date.getMonth().toString().padStart('2', '0')
    return `${day}/${month}`
  }

  renderProjectsAndTasks() {
    axios.get(URL).then(result => {
      const tasks = result.data.tasks.map(task => 
        <Row key={task._id} cols={[
          { text: task.name, size: '_4' },
          { text: task.sender.name, size: '_2' },
          { text: task.project.name, size: '_2' },
          { text: <ProgressBar size="60%" text={this.dateFormat(task.deadline)} />, size: '_2' }
        ]} />
      )
      const projects = result.data.projects.map(project =>
        <Project date={this.dateFormat(project.deadline)} text={project.name} />
      )
      this.setState({
        ...this.state,
        tasks: tasks,
        projects: projects
      })
    })
  }

  render() {
    return(
      <div className="content">
        <Menu />
        <Header title="Página inicial" />
        <main>
          <section className="session-home">
            <h3>Tarefas com data de conclusão próximas</h3>
            <Row position="first" cols={[
              { text: 'Tarefa', size: '_4' }, 
              { text: 'Remetente', size: '_2' }, 
              { text: 'Projeto', size: '_2' }, 
              { text: 'Prazo', size: '_2' }
            ]} />
            {this.state.tasks}
          </section>
          <section className="session-home">
            <h3>Projetos recentes</h3>
            <div className="projects">
              {this.state.projects}
              <Project type="white-quadrat" text="Novo projeto" />
            </div>
          </section>
        </main>
      </div>
    )
  }
}