import React, { Component } from 'react'
import Button from '../utils/button/Button'
import Input from '../utils/input/Input'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import axios from 'axios'
import './user.css'

const URL = 'http://localhost:8082/user/add'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { display: 'none', color: 'blue' }
    this.submit = this.submit.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  submit(e) { e.preventDefault() }

  addUser() {
    const body = {
      id: window.localStorage.getItem('id'),
      email: document.querySelector(`input[name='email']`).value
    }
    axios.post(URL, body).then(result => {
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
              <h1>Convidar pessoas</h1>
            </header>
            <h4 className="user-h4">Para enviar um convite basta:</h4>
            <ul className="user-ul">
              <li>- Informar o email</li>
              <li>- Clicar em "Enviar convite"</li>
              <li>- Ai é só esperar o convite ser aceito</li>
            </ul>
            <form onSubmit={this.submit}>
              <section>
                <Input name="email" type="email" label="Email" width="100%" required="required" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Enviar convite" click={this.addUser} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}