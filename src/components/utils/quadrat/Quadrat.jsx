import React from 'react'
import { Layer, Add } from '../icons/Icon'
import './quadrat.css'

export default props => {
  return (
    <div className={`quadrat ${props.color ? `${props.color} ${props.color}-hover` : ''} ${props.type || ''}`}>
      {props.type === 'white-quadrat' ? <Add /> : <Layer color="white" />}
      {props.type === 'white-quadrat' ? '' : props.date}
      {props.text ? <p>{props.text}</p> : ''}
    </div>
  )
}