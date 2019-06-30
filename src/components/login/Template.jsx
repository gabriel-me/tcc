import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Outline } from '../utils/button/Button'
import './login.css'

const signType = (sign) => {
  const URL = window.location.href
  return URL.indexOf(`/${sign}`)
}

const textH2 = () => 
  signType('signin') !== -1 ? 'Acesse sua conta' : 'Crie sua conta'

const controller = () => 
  signType('signup') === -1 ? <SignIn /> : <SignUp />

export default () => 
  <div className="login-container">
    <h1 className="logo">LOGO</h1>
    <div className="login">
      <section>
        <a href="/signup"><h2 className="h2-left">Criar conta</h2></a>
        <a href="/signin"><h2 className="h2-right">Entrar</h2></a>
      </section>
      <section className="padding">
        <h1>{textH2()}</h1>
      </section>
      <section className="padding">
        <div>
          <Outline label="Entrar com o Google" />
          <h3><span>Ou</span></h3>
          {controller()}
        </div>
      </section>
    </div>
  </div>