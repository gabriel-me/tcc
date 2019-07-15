import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '../utils/button/Button'
import Input from '../utils/input/Input'
import { Close } from '../utils/icons/Icon'
import Profile from '../utils/profile/Profile'
import Form from '../utils/form/Form'

const changeProfileURL = `http://localhost:8082/user`
const infoProfileURL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`
const changeProfilePhotoURL = `http://localhost:8082/user/upload/${window.localStorage.getItem('id')}`

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
    this.infoProfile = this.infoProfile.bind(this)
    this.infoProfile()
  }

  submit(e) { e.preventDefault() }

  infoProfile() {
    axios.get(infoProfileURL).then(result => {
      const {
        name,
        lastName,
        profession,
        status,
        about,
        photo
      } = result.data

      document.querySelector(`input[name='name']`).value = name || ''
      document.querySelector(`input[name='lastName']`).value = lastName || ''
      document.querySelector(`input[name='profession']`).value = profession || ''
      document.querySelector(`input[name='status']`).value = status || ''
      document.querySelector(`input[name='about']`).value = about || ''
      document.getElementById('photo').src = photo || '../image/profile.jpg'
    })
  }

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

    axios.post(changeProfileURL, body).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }

  changeProfilePhoto() {
    const header = { 'Content-Type': 'multipart/form-data' }
    const body = new FormData()
    const image = document.querySelector("input[name='img']")
    body.append("img", image.files[0])
    axios.post(changeProfilePhotoURL, body, header).then(() => {
      document.getElementById('photo').src = 
        `http://localhost:8082/user/upload/${window.localStorage.getItem('id')}`
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
            <input id="photo-upload" className="photo-upload" onChange={this.changeProfilePhoto} type="file" name="img"></input>
            <form onSubmit={this.submit}>
              <section className="profile-section">
                <label htmlFor="photo-upload">
                  <Profile id="photo" />
                </label>
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