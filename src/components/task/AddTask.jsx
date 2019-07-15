import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input, { Date } from '../utils/input/Input'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import { Close } from '../utils/icons/Icon'

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  submit(e) { e.preventDefault() }

  addTask() {
    const URL = `http://localhost:8082/task`
    const values = Form.getFormValues('form')
    const requestBody = {
      'id': values[3],
      'name': values[0],
      'addressee': {
        id: values[1],
        name: values[1]
      },
      'deadline': values[2],
      'description': values[4],
      'sender': {
        id: window.localStorage.getItem('id'),
        name: `${window.localStorage.getItem('name')}
          ${window.localStorage.getItem('lastName')}`,
        photo: `http://localhost:8082/user/upload/${window.localStorage.getItem('id')}`
      }
    }

    axios.post(URL, requestBody).then(result => {
      if (result.status === 200) {
        console.log('Success')
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
                <Input name="addressee" label="Responsável pela tarefa" width="49%" />
                <Date name="deadline" label="Prazo de entrega" width="49%" />
              </section>
              <section>
                <Input name="project" label="Projeto que essa tarefa pertence" width="100%" />
              </section>
              <section>
                <Input name="description" label="Descrição" width="100%" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Criar tarefa" click={this.addTask} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}