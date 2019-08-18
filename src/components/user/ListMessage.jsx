import React, { Component } from 'react'
import Status from '../utils/status/Status'
import axios from 'axios'
import Chat from '../utils/chat/Chat'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class ListMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: [], chat: '', closeChat: true, show: false, showMessage: 'menos' }
    this.getFriends = this.getFriends.bind(this)
    this.renderFriends = this.renderFriends.bind(this)
    this.renderChat = this.renderChat.bind(this)
    this.getFriends()
  }

  getFriends() {
    axios.get(URL).then(infoUser => {
      let msgs = infoUser.data.msg
      let friends = ''
      if (!this.state.show) {
        friends = infoUser.data.friends.filter(friend => msgs.includes(friend.id))
      } else {
        friends = infoUser.data.friends
      }
      
      this.setState({
        ...this.state,
        friends: friends,
        show: this.state.show ? false : true,
        showMessage: this.state.showMessage === 'mais' ? 'menos' : 'mais'
      })
    })
  }

  renderChat(userId) {
    this.setState({
      ...this.state,
      chat: (this.state.closeChat) ? <Chat user={userId} /> : '',
      closeChat: (this.state.closeChat) ? false : true
    })
  }

  renderFriends() {
    return this.state.friends.map((friend, i) => 
      <li style={{cursor: 'pointer'}} key={i} onClick={() => this.renderChat(friend.id) }>
        <Status status={friend.status} />
        {friend.name} {friend.lastName}
      </li>
    )
  }

  render() {
    return (
      <div>
        <ul>{this.renderFriends()}</ul>
        {this.state.chat}
        <ul>
          <li onClick={() => this.getFriends('all') } style={{cursor: 'pointer'}}>
            Ver {this.state.showMessage}
          </li>
        </ul>
      </div>
    )
  }
}