import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const signType = (sign) => {
  const URL = window.location.href 
  return URL.indexOf(`/${sign}`)
}

export const textH2 = () => {
  return signType('signin') !== -1 
    ? 'Acesse sua conta'
    : 'Crie sua conta'
}

export default () => {
  const controller = () =>
    signType('signup') !== -1 
      ? <SignIn /> 
      : <SignUp />
  return controller()
}