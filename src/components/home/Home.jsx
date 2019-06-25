import React from 'react'
import Header from '../header/Header'
import Li from '../utils/list/Row'
import Profile from '../utils/profile/Profile'
import './home.css'

export default props => 
  <div>
    <Header title="Página inicial" />
    <div className="content">
      <section className="session-home">
        <h3>Tarefas com data de conclusão próximas</h3>
        <Li position="first" cols={[{ text: 'Tarefa', size: '_4' }, { text: 'Remetente', size: '_2' }, { text: 'Projeto', size: '_2' }, { text: 'Prazo', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
      </section>
      <section className="session-home">
        <h3>Projetos recentes</h3>
        <Li position="first" cols={[{ text: 'Tarefa', size: '_4' }, { text: 'Remetente', size: '_2' }, { text: 'Projeto', size: '_2' }, { text: 'Prazo', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
        <Li cols={[{ text: 'Desenvolver front-end', size: '_4' }, { text: <Profile />, size: '_2' }, { text: 'TCC', size: '_2' }, { text: '20/19', size: '_2' }]} />
      </section>
    </div>
  </div>