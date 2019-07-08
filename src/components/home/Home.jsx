import React from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Li from '../utils/list/Row'
import Profile from '../utils/profile/Profile'
import ProgressBar from '../utils/chart/ProgressBar'
import Project from '../utils/quadrat/Quadrat'
import './home.css'

export default props => 
  <div className="content">
    <Menu />
    <Header title="Página inicial" />
    <main>
      <section className="session-home">
        <h3>Tarefas com data de conclusão próximas</h3>
        <Li position="first" cols={[{ text: 'Tarefa', size: '_4' }, { text: 'Remetente', size: '_2' }, { text: 'Projeto', size: '_2' }, { text: 'Prazo', size: '_2' }]} />
        <Li cols={[{ text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="60%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="30%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="25%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="90%" text="20/19 - 13:50" />, size: '_2' }]} />
      </section>
      <section className="session-home">
        <h3>Projetos recentes</h3>
        <div className="projects">
          <Project date="20/19" text="SHOW" />
          <Project date="20/19" text="TCC" />
          <Project date="20/19" text="APP" />
          <Project date="20/19" text="Novo projeto" type="white-quadrat" />
        </div>
      </section>
    </main>
  </div>