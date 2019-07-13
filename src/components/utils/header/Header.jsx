import React, { Component } from 'react'
import { Outline as Button } from '../button/Button'
import { Search } from '../input/Input'
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { ulButton: 'none' }
    this.changeDisplayButton = this.changeDisplayButton.bind(this)
  }

  changeDisplayButton() {
    this.setState({
      ...this.state,
      ulButton: this.state.ulButton === 'none' ? 'flex' : 'none'
    })
  }

  render() {
    return(
      <header className="header">
        <h1>{this.props.title || ''}</h1>
        <div className="right-content">
          <div className="add-container">
            <Button label="Adicionar novo..." click={this.changeDisplayButton} />
            <div className="dropdown">
              <Link to="/task/add"><span className={`${this.state.ulButton}`}>Tarefa</span></Link>
              <Link to="/project/add"><span className={`${this.state.ulButton}`}>Projeto</span></Link>
              <Link to="/user/add"><span className={`${this.state.ulButton}`}>Usuário</span></Link>
            </div>
          </div>
          <Search label="Buscar projeto, tarefa ou contato" option={this.props.option || ''} />
        </div>
      </header>
    )
  }
}