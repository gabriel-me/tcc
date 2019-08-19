import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input, { Switch, Date } from '../utils/input/Input'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import { Close } from '../utils/icons/Icon'
import DateFormat, { brazilFormat } from '../utils/Date'
import './project.css'

let URL = ''

export default class Project extends Component {
  constructor(props) {
    super(props)
    URL = this.props.location.pathname
    URL = `http://localhost:8082${URL.replace('/edit', '')}`
    this.state = { color: '', projectName: '', projectId: '', bossId: '' }
    this.submit = this.submit.bind(this)
    this.editProject = this.editProject.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.getProject = this.getProject.bind(this)
    this.getProject()
  }

  changeColor(color) {
    this.setState({
      ...this.state,
      color: color
    })
  }

  submit(e) { e.preventDefault() }

  getProject() {
    axios.get(URL).then(project => {
      project = project.data
      this.setState({
        ...this.state,
        bossId: project.boss.id,
        projectName: project.name,
        color: project.color,
        projectId: project._id
      })
      document.querySelector(`input[name='name']`).value = project.name || ''
      document.querySelector(`input[name='boss']`).value = project.boss.name || ''
      document.querySelector(`input[name='deadline']`).value = project.deadline ? brazilFormat(project.deadline.substring(0, 10), 'year') : ''
      document.querySelector(`input[name='description']`).value = project.description || ''
    })
  }

  editProject() {
    const URL = `http://localhost:8082/project/edit`
    const values = Form.getFormValues('form')
    const body = {
      'name': values[0],
      'boss': {
        id: this.state.bossId,
        name: values[1]
      },
      'deadline': DateFormat(values[3]),
      'description': values[4],
      'private': values[5],
      'color': this.state.color,
      'projectId': this.state.projectId
    }
    axios.put(URL, body).then(result => {
      console.log(result)
    })
  }

  render() {
    return (
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Detalhes de {this.state.projectName}</h1>
            </header>
            <form onSubmit={this.submit}>
              <section>
                <Input name="name" label="Nome do projeto" width="100%" required="required" />
              </section>
              <section>
                <Input name="boss" url="user" label="Responsável pelo projeto" width="49%" />
                <Date name="deadline" label="Prazo de entrega" width="49%" />
              </section>
              <section>
                <Input name="description" label="Descrição" width="100%" />
              </section>
              <section>
                <div className="color-container">
                  <p>Cores: </p>
                  <div>
                    <span className="project-color red" onClick={() => this.changeColor('red')}></span>
                    <span className="project-color blue" onClick={() => this.changeColor('blue')}></span>
                    <span className="project-color black" onClick={() => this.changeColor('black')}></span>
                    <span className="project-color green" onClick={() => this.changeColor('green')}></span>
                  </div>
                </div>
                <Switch name="public" label="Projeto privado" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Editar projeto" click={this.editProject} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}