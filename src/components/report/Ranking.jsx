import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import Profile from '../utils/profile/Profile'

const URL = `http://localhost:8082/user/`
const left = { marginLeft: '5px' }
const right = { marginRight: '10px', opacity: '.6' }
const alignRight = { textAlign: 'right' }

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
    this.getUsers()
  }
  
  getUsers() {
    axios.get(URL).then(result => {
      let users = result.data
      users = users.map((user, i) =>
        <div key={i} className="ranking-container">
          <div className="ranking-item">
            <div>
              <h2 style={right}>{i + 1}º</h2>
              <Profile src={user.photo} />
              <h3 style={left}>{user.name || ''} {user.lastName || ''}</h3>
            </div>
            <div className="result">
              <h3 className="done">{user.doneTask}</h3>
              <h3 className="not-done">{user.notDoneTask}</h3>
            </div>
          </div>
        </div>
      )
      this.setState({
        ...this.state,
        users: users
      })
    })
  }

  render() {
    return (
      <div>
        <Link to="/report"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Ranking de usuários</h1>
              <div style={alignRight}>
                <h5 className="done">dentro do prazo</h5>
                <h5 className="not-done">fora do prazo</h5>
              </div>
            </header>
            {this.state.users}
          </div>
        </div>
      </div>
    )
  }
}