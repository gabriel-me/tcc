import React from 'react'
import axios from 'axios'
import Header from '../utils/header/Header'
import Menu from '../utils/menu/Menu'
import Row from '../utils/list/Row'
import Tag from '../utils/tag/Tag'
import Profile from '../utils/profile/Profile'
import { Link } from 'react-router-dom'
import '../home/home.css'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const marginName = {
  marginLeft: '.5rem'
}

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { friends: [] }
    this.getFriends = this.getFriends.bind(this)
    this.renderFriends = this.renderFriends.bind(this)
    this.getFriends()
  }

  getFriends() {
    axios.get(URL).then(result => {
      this.setState({
        ...this.state,
        friends: result.data.friends
      })
    })
  }

  renderFriends() {
    let friends = this.state.friends
    return friends.map((friend, i) => 
      <div key={i}>
        <Link to="/">
          <Row cols={[
            { text: 
              <div style={alignCenter}>
                <Profile src={friend.photo} /> 
                <span style={marginName}>{friend.name} {friend.lastName}</span>
              </div>, size: '_6' },
            { text: friend.email, size: '_4' },
            { text: friend.status, size: '_2' },
          ]} />
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div className="content">
        <Menu />
        <Header title="Usuários" />
        <main>
          <Row position="first" cols={[
            { text: 'Usuário', size: '_6' },
            { text: 'Email', size: '_4' },
            { text: 'Status', size: '_2' },
          ]} />
          {this.renderFriends()}
        </main>
      </div>
    )
  }
}