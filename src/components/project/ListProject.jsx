import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MoreHoriz } from '../utils/icons/Icon'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

const styleSpan = {
  height: '.5rem',
  width: '.5rem',
  marginRight: '5px',
  backgroundColor: '#585858',
  borderRadius: '1.5px'
}

const pointer = { cursor: 'pointer' }

export default class ListProject extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }
    this.getProjects = this.getProjects.bind(this)
    this.renderProjects = this.renderProjects.bind(this)
    this.doneProject = this.doneProject.bind(this)
    this.renderProjects()
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      axios.get(URL).then(result => {
        const projects = result.data.projects.filter(project => project.done === false)
        resolve(projects)
      }).catch(err => {
        reject(err)
      })
    })
  }
  
  doneProject(projectId) {
    const URL = 'http://localhost:8082/project'
    const body = { projectId: projectId, userId: window.localStorage.getItem('id') }
    axios.put(URL, body).then(result => {
      this.renderProjects()
    })
  }

  renderProjects() {
    this.getProjects().then(projects => {
      let rows = projects.map((project, i) =>
        <li className='menu-item' key={`${i}`} title={project.name} >
          <Link key={i} to={`/project/${project.id}`}>
            <div>
              <span style={styleSpan} className={`${project.color}`}></span>
              {project.name.length > 30 ? `${project.name.substring(0, 30)}...` : project.name}
            </div>
          </Link>
          <div className="menu-dropdown">
            <span className="menu-icon">
              <MoreHoriz color="#BDBDBD" />
            </span>
            <div className="menu-dropdown-option">
              <Link to={`/project/member/${project.id}`}><span>Integrantes do projeto</span></Link>
              <span style={pointer} onClick={() => this.doneProject(project.id)}>Concluir projeto</span>
              <Link to={`/project/edit/${project.id}`}><span>Editar projeto</span></Link>
              <span style={pointer} onClick={() => this.doneProject(project.id)}>Excluir projeto</span>
            </div>
          </div>
        </li>
      )
      this.setState({
        ...this.state,
        projects: rows
      })
    })
  }

  render() {
    return (
      <ul>{this.state.projects}</ul>
    )
  }
}