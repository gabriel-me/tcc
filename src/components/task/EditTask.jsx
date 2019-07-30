import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input, { Date } from '../utils/input/Input'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import { Close } from '../utils/icons/Icon'
import DateFormat, { brazilFormat } from '../utils/Date'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`
let taskId = ''

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    taskId = this.props.location.pathname
    taskId = taskId.replace('/task/edit/', '')
    this.editTask = this.editTask.bind(this)
    this.getTask = this.getTask.bind(this)
    this.getTask()
  }

  submit(e) { e.preventDefault() }

  getTask() {
    axios.get(URL).then(tasks => {
      let task = tasks.data.tasks.filter(task => task._id === taskId)
      task = task[0]
      document.querySelector(`input[name='name']`).value = task.name || ''
      document.querySelector(`input[name='deadline']`).value = brazilFormat(task.deadline.substring(0, 10)) || ''
      document.querySelector(`input[name='project']`).value = task.project.name || ''
      document.querySelector(`input[name='description']`).value = task.description || ''
    })
  }

  editTask() {
    const URL = `http://localhost:8082/task/edit`
    const values = Form.getFormValues('form')
    const requestBody = {
      'userId': window.localStorage.getItem('id'),
      'taskId': taskId,
      'name': values[0],
      'deadline': DateFormat(values[3]),
      'description': values[4],
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
              <h1>Detalhes da tarefa</h1>
            </header>
            <form onSubmit={this.submit}>
              <section>
                <Input name="name" label="Nome da tarefa" width="100%" required="required" />
              </section>
              <section>
                <Input name="project" url="project" label="Projeto que essa tarefa pertence" width="49%" />
                <Date name="deadline" label="Prazo de entrega" width="49%" />
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