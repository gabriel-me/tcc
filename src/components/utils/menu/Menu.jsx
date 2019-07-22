import React, { Component } from 'react'
import axios from 'axios'
import Profile from '../profile/Profile'
import Status from '../status/Status'
import Projects from '../../project/ListProject'
import Users from '../../user/ListMessage'
import { Link } from 'react-router-dom'
import Add, { Done, Home, Person, Notication, MenuHamburger } from '../icons/Icon'
import './menu.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class Menu extends Component {
  constructor() {
    super()
    this.state = { user: '' }
    this.getCurrentUser = this.getCurrentUser.bind(this)
    this.getCurrentUser(this)
  }

  getCurrentUser() {
    axios.get(URL).then(result => {
      let user = result.data
      this.setState({
        ...this.state,
        user: user
      })
    })
  }

  render() {
    return(
      <div className="menu">
        <header>
          <Link to={`/user/${window.localStorage.getItem('id')}`}>
            <div>
              <Profile src={this.state.user.photo} title="Visualizar perfil" titleLocation="right" />
              <Status status="online" />
              <span className="name">{this.state.user.name}</span>
            </div>
          </Link>
          <MenuHamburger options={[
            {'text': 'Condigurações', 'link': '/config'}, 
            {'text': 'Sair', 'link': '/'}
          ]} color="#BDBDBD" />
        </header>
        <section className="section-main">
          <ul>
            <Link to="/home"><li><Home color="#BDBDBD" /> Página inicial</li></Link>
            <Link to="/task"><li><Done color="#BDBDBD" /> Minhas tarefas</li></Link>
            <Link to="/notification"><li><Notication color="#BDBDBD" /> Caixa de entrada</li></Link>
            <Link to="/user"><li><Person color="#BDBDBD" /> Usuários</li></Link>
          </ul>
        </section>
        <section>
          <header>
            <h4>Contatos</h4>
            <Link to="/user/add"><Add color="#BDBDBD" /></Link>
          </header>
          <Users />
        </section>
        <section>
          <header>
            <h4>Projetos</h4>
            <Link to="/project/add"><Add color="#BDBDBD" /></Link>
          </header>
          <Projects />
        </section>
      </div>
    )
  }
}