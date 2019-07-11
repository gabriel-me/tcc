import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

const styleSpan = {
  height: '.5rem',
  width: '.5rem',
  marginRight: '5px',
  backgroundColor: '#585858',
  borderRadius: '1.5px'
}

export default class ListProject extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }
    this.getProjects = this.getProjects.bind(this)
    this.renderProjects = this.renderProjects.bind(this)
    this.renderProjects()
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      axios.get(URL).then(result => {
        resolve(result.data.projects)
      }).catch(err => {
        reject(err)
      })
    })
  }

  renderProjects() {
    this.getProjects().then(projects => {
      let rows = projects.map((project, i) =>
        <Link key={i} to={`/project/${project.id}`}>
          <li key={`${i}`} title={project.name} >
              <span style={styleSpan} className={`${project.color}`}></span>
              {project.name.length > 30 ? `${project.name.substring(0, 30)}...` : project.name}
          </li>
        </Link>
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