import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input, { Switch, Date } from '../utils/input/Input'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import { Close } from '../utils/icons/Icon'
import './add-project.css'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { display: 'none', color: 'blue' }
    this.submit = this.submit.bind(this)
    this.addProject = this.addProject.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(color) {
    this.setState({
      ...this.state,
      color: color
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
      'description': values[3],
      'private': values[4],
      'color': this.state.color,
      'members': {
        id: window.localStorage.getItem('id'),
        name: window.localStorage.getItem('name')
      }
    }

    axios.post(URL, requestBody).then(result => {
      if (result.status === 200) {
        console.log('Success')
      }
    }).catch(() => {
      console.log('Message Fail')
    })
  }

  render() {
    return(
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Detalhes do projeto</h1>
            </header>
            <form onSubmit={this.submit}>
              <section>
                <Input name="name" label="Nome do projeto" width="100%" required="required" />
              </section>
              <section>
                <Input name="boss" label="Responsável pelo projeto" width="49%" />
                <Date name="deadline" label="Prazo de entrega" width="49%" />
              </section>
              <section>
                <Input name="description" label="Descrição" width="100%" />
              </section>
              <section>
                <div className="color-container">
                  <p>Cores: </p>
                  <span className="project-color red" onClick={() => this.changeColor('red')}></span>
                  <span className="project-color blue" onClick={() => this.changeColor('blue')}></span>
                  <span className="project-color black" onClick={() => this.changeColor('black')}></span>
                  <span className="project-color green" onClick={() => this.changeColor('green')}></span>
                </div>
                <Switch name="public" label="Projeto privado" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Criar projeto" click={this.addProject} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}