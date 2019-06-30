import React, { Component } from 'react'
import Input from '../utils/input/Input'
import Button from '../utils/button/Button'
import Form from '../utils/form/Form'
import axios from 'axios'
import './form.css'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.register = this.register.bind(this)
  }

  submit(e) { e.preventDefault() }

  register() {
    const URL = `http://localhost:8082/auth/register/`
    const values = Form.getFormValues('form')
    const requestBody = {
      'email': values[2],
      'password': values[3]
    }

    axios.post(URL, requestBody).then(result => {
      if (result.status === 200) {
        window.location.href = 'http://localhost:3000/signin'
      }
    }).catch(() => {
      console.log('Message Fail')
    })
  }

  render() {
    return(
      <form className="form signup" onSubmit={this.submit} >
        <div>
          <Input name="name" label="Nome" width="17.3rem" required="required" />
          <Input name="lastName" label="Sobrenome" width="17.3rem" required="required" />
        </div>
        <Input name="email" type="email" label="Email" width="100%" required="required" />
        <div>
          <Input name="password" type="password" label="Senha" width="17.3rem" required="required" />
          <Input name="confirmPassword" type="password" label="Confirmar senha" width="17.3rem" />
        </div>
        <Button label="Entrar" click={this.register} />
        <a href="http://">Esqueceu sua senha?</a>
      </form>
    )
  }
}