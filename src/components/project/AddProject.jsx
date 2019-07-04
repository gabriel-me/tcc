import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input from '../utils/input/Input'
import axios from 'axios'
import Form from '../utils/form/Form'
import Modal from '../utils/modal/Modal'
import Icon from '../utils/icon/Icon'
import './project.css'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { display: 'none' }
    this.display = this.display.bind(this)
    this.submit = this.submit.bind(this)
    this.addProject = this.addProject.bind(this)
  }

  display() {
    this.setState({
      ...this.state, 
      display: this.state.display === 'flex' ? 'none' : 'flex'
    })
  }

  submit(e) { e.preventDefault() }

  addProject() {
    const URL = `http://localhost:8082/project`
    const values = Form.getFormValues('form')
    const requestBody = {
      'name': values[0],
      'boss': values[1],
      'deadline': values[2],
      'description': values[3]
    }

    axios.post(URL, requestBody).then(result => {
      if (result.status === 200) {
        this.display()
      }
    }).catch(() => {
      console.log('Message Fail')
    })
  }

  render() {
    return(
      <div>
        <span onClick={this.display}>
          <Icon color="#BDBDBD" title="Novo projeto" titleLocation="left" />
        </span>
        <span className={this.state.display}>
          <span id="close" onClick={this.display}>
            <Icon icon="close-outline" size="2.5rem" />
          </span>
          <Modal contentHTML={
            <div className="container-project">
              <div className="add-project">
                <header>
                  <h1>Detalhes desse projeto</h1>
                </header>
                <form onSubmit={this.submit}>
                  <section>
                    <Input name="name" label="Nome do projeto" width="100%" required="required" />
                  </section>
                  <section>
                    <Input name="boss" label="Responsável pelo projeto" width="49%" />
                    <Input name="deadline" label="Prazo de entrega" width="49%" />
                  </section>
                  <section>
                    <Input name="description" label="Descrição" width="100%" />
                  </section>
                  <section className="last-section">
                    <span>
                      <Button label="Criar projeto" click={this.addProject} />
                    </span>
                  </section>
                </form>
              </div>
            </div>} 
          />
        </span>
      </div>
    )
  }
}