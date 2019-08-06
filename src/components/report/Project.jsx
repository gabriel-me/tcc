import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'

export default () =>
  <div>
    <Link to="/report"><span id="close"><Close /></span></Link>
    <div className="form-container">
      <div className="form-content">
        <header>
          <h1>Projetos</h1>
        </header>
      </div>
    </div>
  </div>