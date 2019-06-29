import React from 'react'
import { Outline } from '../utils/button/Button'
import TemplateController, { textH2 as Text } from './TemplateController'
import './login.css'

export default () => 
  <div className="login-container">
    <div className="login">
      <section>
        <a href="/signup"><h2 className="h2-left">Criar conta</h2></a>
        <a href="/signin"><h2 className="h2-right">Entrar</h2></a>
      </section>
      <section className="padding">
        <h1>{Text()}</h1>
      </section>
      <section className="padding">
        <div>
          <Outline label="Entrar com o Google" />
          <h3><span>Ou</span></h3>
          {TemplateController()}
        </div>
      </section>
    </div>
  </div>