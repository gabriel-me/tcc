import React, { Component } from 'react'
import axios from 'axios'
import { Close } from '../utils/icons/Icon'
import { Link } from 'react-router-dom'
import Profile from '../utils/profile/Profile'
import './notification.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { notifications: [] }
    this.getNotifications = this.getNotifications.bind(this)
    this.renderNotifications = this.renderNotifications.bind(this)
    this.dateNotification = this.dateNotification.bind(this)
    this.getNotifications()
  }

  getNotifications() {
    axios.get(URL).then(result => {
      this.renderNotifications(result.data.notifications)
    })
  }

  dateNotification(date) {
    date = new Date(date)
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${day}/${month}`
  }

  renderNotifications(notifications) {
    notifications = notifications.map((notification, i) => 
      <section className="notification" key={i}>
        <div>
          <Profile src={notification.sender.photo} /> 
          <h4 className="opacity">{notification.sender.name || ''}</h4>
        </div>
        <div>
          <h3>{notification.message || ''}</h3>
        </div>
        <time className="opacity">{this.dateNotification(notification.date) || ''}</time>
      </section>
    )
    this.setState({
      ...this.state,
      notifications: notifications
    })
  }

  render() {
    return(
      <div>
        <Link to="/home"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header><h1>Caixa de entrada</h1></header>
            <div>{this.state.notifications}</div>
          </div>
        </div>
      </div>
    )
  }
}