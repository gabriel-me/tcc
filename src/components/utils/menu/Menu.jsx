import React, { Component } from 'react'
import Icon from '../icon/Icon'
import Profile from '../profile/Profile'
import Status from '../status/Status'
import AddProject from '../../project/AddProject'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './menu.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      listProject: [], 
      listMessages: []
    }
  }

  renderRows() {
    let tasks = []
    let projects = []
    let messages = []

    axios.get(URL).then(result => {
      result.data.projects.forEach(project => {
        projects.push({ id: project._id, name: project.name, color: project.color })
      })
      result.data.tasks.forEach(task => {
        tasks.push({ id: task._id, name: task.name })
      })
      result.data.messages.forEach(message => {
        messages.push({ id: message._id, sender: message.sender, status: message.status })
      })

      this.setState({
        ...this.state,
        listProject: projects,
        listMessages: messages
      })
    })

    return (
      <div>
        <section>
          <header>
            <h4>Contatos</h4>
            <Icon color="#BDBDBD" title="Nova conversa" titleLocation="left" />
          </header>
          <ul>
            {this.state.listMessages.map(m => <li key={m.id}><Status status={m.status} />{m.sender}</li>)}
          </ul>
        </section>
        <section>
          <header>
            <h4>Projetos</h4>
            <AddProject />
          </header>
          <ul>
            {this.state.listProject.map(p => <li key={p.id}>
              <span className={`color-project ${p.color}`}></span>{p.name}
            </li>)}
          </ul>
        </section>
      </div>
    )
  }

  render() {
    return(
      <div className="menu">
        <header>
          <div>
            <Profile title="Perfil" titleLocation="right" />
            <Status status="online" />
          </div>
          <Icon icon="arrowhead-left-outline" color="#BDBDBD" size="2rem" />
        </header>
        <section className="section-main">
          <ul>
            <Link to="/home"><li><Icon icon="home-outline" color="#BDBDBD" />Página inicial</li></Link>
            <Link to="/task"><li><Icon icon="checkmark-circle-2-outline" color="#BDBDBD" />Minhas tarefas</li></Link>
            <Link to="/task"><li><Icon icon="bell-outline" color="#BDBDBD" />Caixa de entrada</li></Link>
            <Link to="/task"><li><Icon icon="people-outline" color="#BDBDBD" />Usuários</li></Link>
          </ul>
        </section>
        {this.renderRows()}
      </div>
    )
  }
}