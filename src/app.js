import React, { Component } from 'react';
import Menu from './components/menu/Menu'
import Routes from './components/Router'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <main>
          <div>
            <Routes />
          </div>
        </main>  
      </div>
    )
  }
}