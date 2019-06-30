import React, { Component } from 'react'
import axios from 'axios'
import Input from '../utils/input/Input'
import Button from '../utils/button/Button'
import Form from '../utils/form/Form'
import './form.css'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(e) { e.preventDefault() }

  login() {
    const URL = `http://localhost:8082/auth/authenticate/`
    const values = Form.getFormValues('form')
    const requestBody = {
      'email': values[0],
      'password': values[1]
    }

    axios.post(URL, requestBody).then(result => {
      if (result.status === 200) {
        window.location.href = 'http://localhost:3000/home'
      }
    }).catch(() => {
      console.log('Message Fail')
    })
  } 

  render() {
    return(
      <form className="form" onSubmit={this.submit}>
        <Input name="email" type="email" label="Email" width="100%" required="required" />
        <Input name="password" type="password" label="Senha" width="100%" required="required" />
        <Button label="Entrar" click={this.login} />
        <a href="http://">Esqueceu sua senha?</a>
      </form>
    )
  }
}