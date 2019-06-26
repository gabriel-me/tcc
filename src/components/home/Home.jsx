import React from 'react'
import Header from '../header/Header'
import Li from '../utils/list/Row'
import Profile from '../utils/profile/Profile'
import ProgressBar from '../utils/chart/ProgressBar'
import Project from '../project/Quadrat'
import IconTask from '../utils/icon/Icon'
import './home.css'

export default props => 
  <div>
    <Header title="Página inicial" />
    <div className="content">
      <section className="session-home">
        <h3>Tarefas com data de conclusão próximas</h3>
        <Li position="first" cols={[{ text: 'Tarefa', size: '_4' }, { text: 'Remetente', size: '_2' }, { text: 'Projeto', size: '_2' }, { text: 'Prazo', size: '_2' }]} />
        <Li cols={[{ text: <IconTask icon="checkmark-outline" title="Concluir essa tarefa" titleLocation="right" text="Enviar um foguete para lua" /> , size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="60%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <IconTask icon="checkmark-outline" title="Concluir essa tarefa" titleLocation="right" text="Criar uma nova lib para o sistema" />, size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="30%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <IconTask icon="checkmark-outline" title="Concluir essa tarefa" titleLocation="right" text="Desenvolver front-end" />, size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="25%" text="20/19 - 13:50" />, size: '_2' }]} />
        <Li cols={[{ text: <IconTask icon="checkmark-outline" title="Concluir essa tarefa" titleLocation="right" text="Programming lenguage in Perl" />, size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: <ProgressBar size="90%" text="20/19 - 13:50" />, size: '_2' }]} />
      </section>
      <section className="session-home">
        <h3>Projetos recentes</h3>
        <div className="projects">
          <Project date="20/19" text="SHOW" />
          <Project date="20/19" text="TCC" />
          <Project date="20/19" text="APP" />
          <Project date="20/19" text="Ver todos" type="white-quadrat" />
        </div>
      </section>
    </div>
  </div>