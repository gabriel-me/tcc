import React, { Component } from 'react'
import Status from '../utils/status/Status'
import axios from 'axios'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class ListMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    this.getMessages = this.getMessages.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
    this.renderMessages()
  }

  getMessages() {
    return new Promise((resolve, reject) => {
      axios.get(URL).then(result => {
        resolve(result.data.messages)
      }).catch(err => {
        reject(err)
      })
    })
  }

  renderMessages() {
    this.getMessages().then(messages => {
      let rows = messages.map((message, i) =>
        <li key={`${i}`} title={message.sender} >
          <Status status={message.status || 'offline'} />
          {message.sender.length > 20 ? `${message.sender.substring(0, 15)}...` : message.sender}
        </li>
      )
      this.setState({
        ...this.state,
        messages: rows
      })
    })
  }

  render() {
    return (
      <ul>{this.state.messages}</ul>
    )
  }
}