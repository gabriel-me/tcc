import React, { Component } from 'react'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import axios from 'axios'

let currentURL = ''

export default class Project extends Component {
  constructor(props) {
    super(props)
    currentURL = this.props.location.pathname
    this.state = { project: '' }
    this.getInfoProject = this.getInfoProject.bind(this)
    this.getInfoProject()
  }

  getInfoProject() {
    axios.get(`http://localhost:8082${currentURL}`).then(result => {
      this.setState({
        ...this.state,
        project: result.data
      })
    })
  }

  render() {
    return (
      <div className="content">
        <Menu />
        <Header title="Página inicial" />
        <main>
          <section>
            <h4>Members</h4>
          </section>
          <section>
            <h4>Tasks</h4>
          </section>
        </main>
      </div>
    )
  }
}