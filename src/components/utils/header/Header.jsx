import React from 'react'
import { Outline as Button } from '../button/Button'
import { Search } from '../input/Input'
import './header.css'

export default props => 
  <header className="header">
    <h1>{props.title || ''}</h1>
    <div>
      <Button label="Adicionar novo..." />
      <Search label="Buscar projeto, tarefa ou usuário" option={props.option || ''} />
    </div>
  </header>