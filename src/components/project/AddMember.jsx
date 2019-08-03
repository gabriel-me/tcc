import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import Profile from '../utils/profile/Profile'
import Button from '../utils/button/Button'
import axios from 'axios'
import './project.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`
let projectURL = ''
let memberURL = `http://localhost:8082/project/member`
let projectId = ''

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: [], projectName: '' }
    projectId = this.props.location.pathname
    projectId = projectId.replace('/project/member/add/', '')
    projectURL = `http://localhost:8082/project/${projectId}`
    this.getUser = this.getUser.bind(this)
    this.getProject = this.getProject.bind(this)
    this.addMember = this.addMember.bind(this)
    this.getProjectName = this.getProjectName.bind(this)
    this.getProjectName()
    this.getUser()
  }

  addMember(member) {
    const body = {
      id: member.id,
      name: `${member.name} ${member.lastName}`,
      photo: member.photo,
      profession: member.profession,
      projectId: projectId,
      senderId: window.localStorage.getItem('id'),
      senderName: `${window.localStorage.getItem('name')} ${window.localStorage.getItem('lastName')}`,
      senderPhoto: window.localStorage.getItem('photo')
    }
    axios.post(memberURL, body).then(result => {
      this.getUser()
    })
  }

  getUser() {
    axios.get(URL).then(user => {
      this.getProject().then(members => {
        let peoples = []
        let friends = user.data.friends
        friends.forEach(friend => {
          let people = members.filter(member => member.id === friend.id)
          if (people.length === 0) 
            peoples.push(friend)
        })
        this.renderFriends(peoples)
      })
    })
  } 

  getProject() {
    return new Promise((resolve, reject) => {
      axios.get(projectURL).then(project => {
        resolve(project.data.members)
      }).catch(err => {
        reject(err)
      })
    })
  }

  getProjectName() {
    axios.get(projectURL).then(project => {
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
              <h1>Adicionar em {this.state.projectName}</h1>
            </header>
            {this.state.friends}
          </div>
        </div>
      </div>
    )
  }
}