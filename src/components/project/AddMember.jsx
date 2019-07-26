import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import Profile from '../utils/profile/Profile'
import Button from '../utils/button/Button'
import axios from 'axios'
import './project.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`
let URLProject = `http://localhost:8082/project/member/`
let idProject = ''

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: [], projectName: '' }
    idProject = this.props.location.pathname
    idProject = idProject.replace('/project/member/add/', '')
    this.getUser = this.getUser.bind(this)
    this.getProject = this.getProject.bind(this)
    this.addMember = this.addMember.bind(this)
    this.getUser()
    this.getProject()
  }

  addMember(friend) {
    const body = {
      friend: friend,
      project: idProject
    }
    axios.post(URLProject, body).then(result => {
      console.log(result.data)
    })
  }

  getUser() {
    axios.get(URL).then(user => {
      this.renderFriends(user.data.friends)
    })
  } 

  getProject() {
    axios.get(URLProject).then(project => {
      this.setState({
        ...this.state,
        projectName: project.data.name
      })
    })
  }

  renderFriends(friends) {
    friends = friends.map((friend, i) =>
      <section key={i} className='friend'>
        <div>
          <Profile src={friend.photo} />
          <h4 className="opacity">{`${friend.name} ${friend.lastName}` || ''}</h4>
        </div>
        <span onClick={() => this.addMember(friend)}><Button /></span>
      </section>
    )
    this.setState({
      ...this.state,
      friends: friends
    })
  }

  render() {
    return (
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Adicionar integrantes em {this.state.projectName}</h1>
            </header>
            {this.state.friends}
          </div>
        </div>
      </div>
    )
  }
}