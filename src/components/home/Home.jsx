import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import ProgressBar from '../utils/chart/ProgressBar'
import Project from '../utils/quadrat/Quadrat'
import { Message } from '../utils/alert/Alert'
import Profile from '../utils/profile/Profile'
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
    if (date) {
      date = new Date(date)
      const day = date.getDate().toString().padStart('2', '0')
      const month = date.getMonth().toString().padStart('2', '0')
      return `${day}/${month}`
    }
    return 'Sem prazo'    
  }

  renderProjectsAndTasks() {
    axios.get(URL).then(result => {
      const tasks = result.data.tasks.map(task => 
        <Row key={task._id} cols={[
          { text: task.name, size: '_4' },
          { text: <Profile src={task.sender.photo} />, size: '_2' },
          { text: task.project.name, size: '_2' },
          { text: <ProgressBar size="60%" text={this.dateFormat(task.deadline)} />, size: '_2' }
        ]} />
      )
      const projects = result.data.projects.map(project =>
        <Link key={project.id} to={`/project/${project.id}`}>
          <Project color={project.color} date={this.dateFormat(project.deadline)} text={project.name} />
        </Link>
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
            {this.state.tasks.length > 0 ? this.state.tasks : <Message text="Você não possui tarefas pendentes" />}
          </section>
          <section className="session-home">
            <h3>Projetos recentes</h3>
            {this.state.projects.length > 0 ? '' : <Message text="Você ainda não possui projetos" />}
            <div className="projects">
              {this.state.projects}
              <Link to="/project/add">
                <Project type="white-quadrat" text="Novo projeto" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    )
  }
}