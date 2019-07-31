import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Status from '../utils/status/Status'
import axios from 'axios'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class ListMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: [] }
    this.getFriends = this.getFriends.bind(this)
    this.renderFriends = this.renderFriends.bind(this)
    this.getFriends()
  }

  getFriends() {
    axios.get(URL).then(infoUser => {
      let friends = infoUser.data.friends
      this.setState({
        ...this.state,
        friends: friends
      })
    })
  }

  renderFriends() {
    return this.state.friends.map((friend, i) => 
      <Link key={i} to={`/user/view/${friend.id}`}>
        <li>
          <Status status={friend.status} />
          {friend.name} {friend.lastName}
        </li>
      </Link>
    )
  }

  render() {
    return (
      <ul>{this.renderFriends()}</ul>
    )
  }
}