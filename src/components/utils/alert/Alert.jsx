import React from 'react'
import './alert.css'

export const Alert = props => 
  <div className="alert">
    <h1>{props.text || ''}</h1>
  </div>

export const Message = props =>
  <div className="message">{props.text || 'Message component'}</div>