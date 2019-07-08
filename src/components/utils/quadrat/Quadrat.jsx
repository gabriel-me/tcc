import React from 'react'
import './quadrat.css'

export default props =>
  <div className={`blue-quadrat ${props.type || ''}`}>
    {props.type === 'white-quadrat' ? '' : props.date}
    {props.text ? <p>{props.text}</p> : ''}
  </div>