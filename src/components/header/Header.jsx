import React from 'react'
import ImputSearch from '../utils/input/SearchInput'
import './header.css'

export default props => 
  <header className="header">
    <h1>{props.title || ''}</h1>
    <ImputSearch label="Buscar projeto, tarefa ou usuário" option={props.option || ''} />
  </header>