import React from 'react'
import { Folder, Add } from '../icons/Icon'
import './quadrat.css'

export default props =>
  <div className={`blue-quadrat ${props.type || ''}`}>
    {props.type === 'white-quadrat' ? <Add /> : <Folder color="white" />} 
    {props.type === 'white-quadrat' ? '' : props.date}
    {props.text ? <p>{props.text}</p> : ''}
  </div>