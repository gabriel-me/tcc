import React, { Component } from 'react'
import axios from 'axios'
import { Close } from '../utils/icons/Icon'
import { Link } from 'react-router-dom'
import Profile from '../utils/profile/Profile'
import Button from '../utils/button/Button'
import './project.css'

let currentURL = ''
let idProject = ''

export default class extends Component {
  constructor(props) {
    super(props)
    currentURL = this.props.location.pathname
    idProject = currentURL.replace('/project/member/', '')
    currentURL = `http://localhost:8082${currentURL}`
    currentURL = currentURL.replace('/member', '')
    this.state = { project: '', members: [] }
    this.getProject = this.getProject.bind(this)
    this.renderMembers = this.renderMembers.bind(this)
    this.renderProjectName = this.renderProjectName.bind(this)
    this.getProject()
  }

  getProject() {
    axios.get(currentURL).then(project => {
      this.renderMembers(project.data.members)
      this.renderProjectName(project.data.name)
    })
  }

  renderMembers(members) {
    members = members.map((member, i) => 
      <div key={i} className="member">
        <Profile src={member.photo} />
        <h3>{member.name || ''}</h3>
      </div>
    )
    this.setState({
      ...this.state,
      members: members
    })
  }

  renderProjectName(name) {
    this.setState({
      ...this.state,
      project: name
    })
  }

  render() {
    return (
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Integrantes de {this.state.project}</h1> 
              <Link to={`add/${idProject}`}>
                <Button label="Novo integrante" />
              </Link>
            </header>
            <section>{this.state.members}</section>
          </div>
        </div>
      </div>
    )
  }
}