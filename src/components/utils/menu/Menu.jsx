import React from 'react'
import Icon from '../icon/Icon'
import Profile from '../profile/Profile'
import Status from '../status/Status'
import './menu.css'

export default () =>
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
        <a href="/home"><li><Icon icon="home-outline" color="#BDBDBD" />Página inicial</li></a>
        <a href="/task"><li><Icon icon="checkmark-circle-2-outline" color="#BDBDBD" />Minhas tarefas</li></a>
        <a href="/task"><li><Icon icon="bell-outline" color="#BDBDBD" />Caixa de entrada</li></a>
        <a href="/task"><li><Icon icon="people-outline" color="#BDBDBD" />Usuários</li></a>
      </ul>        
    </section>
    <section>
      <header>
        <h4>Conversas</h4>
        <a href="/task"><Icon color="#BDBDBD" title="Novo conversa" titleLocation="left" /></a>
      </header>
      <ul>
        <a href="/task"><li><Status />Eddie Vedder</li></a>
        <a href="/task"><li><Status />Gabriel Marques de Souza</li></a>
        <a href="/task"><li><Status status="online" />Roger Waters</li></a>
      </ul>
    </section>
    <section>
      <header>
        <h4>Projetos</h4>
        <a href="/task"><Icon color="#BDBDBD" title="Novo projeto" titleLocation="left" /></a>        
      </header>
      <ul>
        <a href="/task"><li>- Novo Aplicativo de Vendas</li></a>
        <a href="/task"><li>- Design do site principal</li></a>
        <a href="/task"><li>- API REST, do sistema interno</li></a>
        <a href="/task"><li>- TCC - FEMA 2019</li></a>
      </ul>
    </section>
  </div>