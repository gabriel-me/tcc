import React, { Component } from 'react'
import axios from 'axios'
import { Close } from '../utils/icons/Icon'
import { Link } from 'react-router-dom'
import Profile from '../utils/profile/Profile'
import Button from '../utils/button/Button'
import './project.css'

let currentURL = ''
let projectId = ''

const styleSection = {
  position: 'relative',
  flexDirection: 'column'
}

export default class extends Component {
  constructor(props) {
    super(props)
    currentURL = this.props.location.pathname
    projectId = currentURL.replace('/project/member/', '')
    currentURL = `http://localhost:8082${currentURL}`
    currentURL = currentURL.replace('/member', '')
    this.state = { project: '', members: [] }
    this.getProject = this.getProject.bind(this)
    this.renderMembers = this.renderMembers.bind(this)
    this.renderProjectName = this.renderProjectName.bind(this)
    this.deleteMember = this.deleteMember.bind(this)
    this.getProject()
  }

  deleteMember(userId) {
    const URL = 'http://localhost:8082/project/member'
    const body = {
      userId: userId,
      projectId: projectId
    }
    axios.put(URL, body).then(response => {
      this.getProject()
    })
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
        <span className="delete" onClick={ () => this.deleteMember(member.id) }>
          Excluir
        </span>
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
              <Link to={`add/${projectId}`}>
                <Button label="Novo integrante" />
              </Link>
            </header>
            <section style={styleSection}>{this.state.members}</section>
          </div>
        </div>
      </div>
    )
  }
}