import React from 'react'
import Profile from '../profile/Profile'
import Status from '../status/Status'
import Projects from '../../project/ListProject'
import AddProject from '../../project/AddProject'
import Messages from '../../message/ListMessage'
import { Link } from 'react-router-dom'
import './menu.css'

export default () =>
  <div className="menu">
    <header>
      <div>
        <Profile title="Perfil" titleLocation="right" />
        <Status status="online" />
      </div>
      <h4>BTN</h4>
    </header>
    <section className="section-main">
      <ul>
        <Link to="/home"><li>Página inicial</li></Link>
        <Link to="/task"><li>Minhas tarefas</li></Link>
        <Link to="/task"><li>Caixa de entrada</li></Link>
        <Link to="/task"><li>Usuários</li></Link>
      </ul>
    </section>
    <section>
      <header>
        <h4>Contatos</h4>
        <h4>btn</h4>
      </header>
      <Messages />
    </section>
    <section>
      <header>
        <h4>Projetos</h4>
        <AddProject />
      </header>
      <Projects />
    </section>
  </div>