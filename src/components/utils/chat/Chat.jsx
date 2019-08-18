import React, { Component } from 'react'
import Profile from '../profile/Profile'
import { Close, Send } from '../icons/Icon'
import axios from 'axios'
import './chat.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [], name: '', photo: '', display: 'block' }
    this.sendMessage = this.sendMessage.bind(this)
    this.getMessages = this.getMessages.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
    this.getUser = this.getUser.bind(this)
    this.display = this.display.bind(this)
    this.getMessages()
    this.getUser()
  }

  getMessages() {
    axios.get(URL).then(result => {
      let messages = result.data.messages.filter(msg =>
        msg.userId === this.props.user || msg.senderId === this.props.user
      )
      this.renderMessages(messages)
    })
  }

  display() {
    this.setState({
      ...this.state,
      display: 'none'
    })
  }
  
  renderMessages(messages) {
    messages = messages.map((message, i) =>
      <section key={i} className={message.senderId === window.localStorage.getItem('id') ? 's-b' : ''}>
        <span className={message.senderId === window.localStorage.getItem('id') ? 'box-b' : 'box-a'}>
          {message.message}
        </span>
      </section>
    )
    this.setState({
      ...this.state,
      messages: messages
    })
    let messageContainer = document.getElementById('messageContainer')
    messageContainer.scrollTop = messageContainer.scrollHeight
  }

  getUser() {
    const URL = `http://localhost:8082/user/${this.props.user}`
    axios.get(URL).then(result => {
      const user = result.data
      this.setState({
        ...this.state,
        name: <span className="person">{user.name} {user.lastName}</span>,
        photo: <Profile src={user.photo} />
      })
    })
  }

  sendMessage(message) {
    const URL = `http://localhost:8082/user/message`
    const body = {
      name: window.localStorage.getItem('name'),
      message: message,
      senderId: window.localStorage.getItem('id'),
      userId: this.props.user
    }
    axios.post(URL, body).then(result => {
      this.getMessages()
    }).catch(err => {
      this.getMessages()
    })
  }

  render() {
    return <div className="chat" style={{display: this.state.display}}>
      <header>
        <span>
          {this.state.photo}
          {this.state.name}
        </span>  
        <span className="close-chat" onClick={this.display}><Close /></span>
      </header>
      <div className="message" id="messageContainer">
        {this.state.messages}
      </div>
      <footer>
        <input className="message-input" placeholder="Digite sua mensagem" type="text" name="send" id="message"></input>
        <span className="send-icon" onClick={() => this.sendMessage(document.getElementById('message').value)}><Send /></span>
      </footer>
    </div>
  }
}