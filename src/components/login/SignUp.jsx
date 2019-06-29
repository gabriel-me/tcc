import React from 'react'
import Input from '../utils/input/Input'
import Button from '../utils/button/Button'
import './form.css'

export default props =>
  <form action="" method="POST" className="form">
    <Input label="Email" width="100%" />
    <Input label="Password" width="100%" />
    <Button label="Entrar" />
    <a href="http://">Esqueceu sua senha?</a>
  </form>