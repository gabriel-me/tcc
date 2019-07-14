import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '../utils/button/Button'
import Input from '../utils/input/Input'
import { Close } from '../utils/icons/Icon'
import Profile from '../utils/profile/Profile'
import Form from '../utils/form/Form'

const URL = `http://localhost:8082/user`

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
  }

  submit(e) { e.preventDefault() }

  changeProfile() {
    const values = Form.getFormValues('form')
    const body = {
      'id': window.localStorage.getItem('id'),
      'name': values[0],
      'lastName': values[1],
      'profession': values[2],
      'status': values[3],
      'about': values[4]
    }

    axios.post(URL, body).then(result => {
      console.log(result)
    }).catch(err => {
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
              <h1>Meu perfil</h1>
            </header>
            <form onSubmit={this.submit}>
              <section className="profile-section">
                <Profile />
              </section>
              <section>
                <Input name="name" type="text" label="Nome" width="49%" required="required" />
                <Input name="lastName" type="text" label="Sobrenome" width="49%" required="required" />
              </section>
              <section>
                <Input name="profession" type="text" label="Principal função" width="49%" />
                <Input name="status" type="text" label="Status" width="49%" />
              </section>
              <section>
                <Input name="about" type="text" label="Sobre mim" width="100%" />
              </section>
              <section className="last-section">
                <span>
                  <Button label="Atualizar perfil" click={this.changeProfile} />
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}