import React from 'react'
import { Switch } from '../utils/input/Input'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import './user.css'

export default () =>
  <div>
    <Link to="/home"><span id="close"><Close /></span></Link>
    <div className="form-container">
      <div className="form-content">
        <header>
          <h1>Permissões/Configurações</h1>
        </header>
        <section className="config">
          <Switch />
          <h3>Envio de emails</h3>
        </section>
        <section className="config">
          <Switch />
          <h3>Notificações no desktop</h3>
        </section>
        <section className="config">
          <Switch checked="checked" />
          <h3>Notificações push</h3>
        </section>
      </div>
    </div>
  </div>