import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'

export default class Project extends Component {
  render() {
    return (
      <div className="content">
        <Menu />
        <Header title="Página inicial" />
        <main>
          <h1>PROJECT</h1>
        </main>
      </div>
    )
  }
}