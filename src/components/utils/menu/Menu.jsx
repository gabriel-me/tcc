import React from 'react'
import Profile from '../profile/Profile'
import Status from '../status/Status'
import Projects from '../../project/ListProject'
import AddProject from '../../project/AddProject'
import Messages from '../../message/ListMessage'
import { Link } from 'react-router-dom'
import Add, { Done, Home, Person, Notication, ArrowBack } from '../icons/Icon'
import './menu.css'

export default () =>
  <div className="menu">
    <header>
      <div>
        <Profile title="Perfil" titleLocation="right" />
        <Status status="online" />
      </div>
      <ArrowBack color="#BDBDBD" />
    </header>
    <section className="section-main">
      <ul>
        <Link to="/home"><li><Home color="#BDBDBD" /> Página inicial</li></Link>
        <Link to="/task"><li><Done color="#BDBDBD" /> Minhas tarefas</li></Link>
        <Link to="/task"><li><Notication color="#BDBDBD" /> Caixa de entrada</li></Link>
        <Link to="/task"><li><Person color="#BDBDBD" /> Usuários</li></Link>
      </ul>
    </section>
    <section>
      <header>
        <h4>Contatos</h4>
        <Add color="#BDBDBD" />
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