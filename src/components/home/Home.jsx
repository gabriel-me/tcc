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
import { Done } from '../utils/icons/Icon'
import { brazilFormat } from '../utils/Date'
import './home.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

const alignCenter = {
  position: 'relative',
}

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], projects: [] }
    this.renderProjectsAndTasks = this.renderProjectsAndTasks.bind(this)
    this.doneTask = this.doneTask.bind(this)
    this.renderProjectsAndTasks()
  }

  doneTask(idTask) {
    alert(idTask)
  }

  renderProjectsAndTasks() {
    axios.get(URL).then(result => {
      const tasks = result.data.tasks.map((task, i) => 
        <div key={i} className="rowTask" style={alignCenter}>
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
      )
      const projects = result.data.projects.map(project =>
        <Link key={project.id} to={`/project/${project.id}`}>
          <Project color={project.color} date={brazilFormat(project.deadline) || 'Sem prazo'} text={project.name} />
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