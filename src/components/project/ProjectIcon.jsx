import React, { Component } from 'react'
import Icon from '../utils/icon/Icon'
import Modal from '../utils/modal/Modal'
import ProjectForm from '../project/AddProject'
import './project.css'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { display: 'none' }
    this.display = this.display.bind(this)
  }

  display() {
    this.setState({...this.state, display: 'flex'})
  }
  
  render() {
    return(
      <div>
        <span onClick={this.display}>
          <Icon color="#BDBDBD" title="Novo projeto" titleLocation="left" />
        </span>
        <span className={this.state.display}>
          <Modal contentHTML={<div>
            <ProjectForm />
          </div>} />
        </span>
      </div>
    )
  }
}