import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input, { Date } from '../utils/input/Input'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import { Close } from '../utils/icons/Icon'
import DateFormat, { brazilFormat } from '../utils/Date'

const styleH4 = { opacity: '.6', color: 'blue' }
let projectId = ''
let taskId = ''
let url = ''

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = { taskName: '', projectName: '' }
    this.submit = this.submit.bind(this)
    url = this.props.location.pathname
    url = url.replace('project/task/edit/', '')
    taskId = url.split('/')[2]
    projectId = url.split('/')[1]
    this.editTask = this.editTask.bind(this)
    this.getTask = this.getTask.bind(this)
    this.getTask()
  }

  submit(e) { e.preventDefault() }

  getTask() {
    const URL = `http://localhost:8082/project/${projectId}`
    axios.get(URL).then(result => {
      let projectTask = result.data.tasks.filter(task => task._id === taskId)[0]
      this.setState({
        ...this.state,
        taskName: projectTask.name,
        projectName: result.data.name
      })
      document.querySelector(`input[name='name']`).value = projectTask.name || ''
      document.querySelector(`input[name='deadline']`).value = projectTask.deadline ? brazilFormat(projectTask.deadline.substring(0, 10), 'year') : ''
      document.querySelector(`input[name='description']`).value = projectTask.description || ''
    })
  }

  editTask() {
    const URL = `http://localhost:8082/project/task/edit`
    const values = Form.getFormValues('form')
    const requestBody = {
      'userId': window.localStorage.getItem('id'),
      'taskId': taskId,
      'projectId': projectId,
      'name': values[0],
      'deadline': DateFormat(values[1]),
      'description': values[2],
    }

    axios.put(URL, requestBody).then(result => {
      if (result.status === 200) {
        console.log(result)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <span>
                <h1>Detalhes de {this.state.taskName}</h1>
                <h4 style={styleH4}>#{this.state.projectName}</h4>
              </span>
            </header>
            <form onSubmit={this.submit}>
              <section>
                <Input name="name" label="Nome da tarefa" width="100%" required="required" />
              </section>
              <section>
                <Date name="deadline" label="Prazo de entrega" width="100%" />
              </section>
              <section>
                <Input name="description" label="Descrição" width="100%" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Editar tarefa" click={this.editTask} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}