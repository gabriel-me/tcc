import React from 'react'
import { Search } from '../input/Input'
import './header.css'

export default props => 
  <header className="header">
    <h1>{props.title || ''}</h1>
    <Search label="Buscar projeto, tarefa ou usuário" option={props.option || ''} />
  </header>