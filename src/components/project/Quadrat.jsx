import React from 'react'
import './quadrat.css'

export default props =>
  <div className={`blue-quadrat ${props.type || ''}`}>
    <i data-eva={props.type === 'white-quadrat' ? 'list-outline' : 'layers'} 
      data-eva-animation="none" 
      data-eva-fill={props.type === 'white-quadrat' ? '#000000' : '#FFFFFF'}
      data-eva-width="2.1rem" 
      data-eva-height="2.1rem"
    >
    </i>
    {props.type === 'white-quadrat' ? '' : props.date}
    {props.text ? <p>{props.text}</p> : ''}
  </div>