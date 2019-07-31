import React, { Component } from 'react'
import { Close } from '../utils/icons/Icon'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './user.css'

let URL = ''

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { user: '' }
    URL = 'http://localhost:8082'
    URL += this.props.location.pathname
    URL = URL.replace('/view', '')
    this.getUser = this.getUser.bind(this)
    this.getUser()
  }

  getUser() {
    axios.get(URL).then(user => {
      const { name, lastName, email, profession, about, status, photo } = user.data
      document.getElementById('name').innerHTML = `${name} ${lastName}` || '...'
      document.getElementById('email').innerHTML = email || '...'
      document.getElementById('profession').innerHTML = profession || '...'
      document.getElementById('about').innerHTML = about || '...'
      document.getElementById('status').innerHTML = status || '...'
      document.getElementById('photo').src = photo || '...'
    })
  }
  
  render() {
    return(
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <section className="view-section">
              <img src="" id="photo"></img>
              <h1 className="user-info" id="name"></h1>
              <h2 className="user-info" id="profession"></h2>
            </section>
            <section className="view-section">
              <h4>Status</h4>
              <h3 className="user-info" id="status"></h3>
            </section>
            <section className="view-section"> 
              <h4>E-mail</h4>
              <h3 className="user-info" id="email"></h3>
            </section>
            <section className="view-section">
              <h4>Sobre</h4>
              <h3 className="user-info" id="about"></h3>
            </section>
          </div>
        </div>
      </div>
    )
  }
}