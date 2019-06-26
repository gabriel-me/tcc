import React from 'react'
import './icon.css'

export default props => 
  <div className="icon">
    <span
      aria-label={props.title || ''}
      className={`hint--${props.titleLocation}`}
    >
      <i
        data-eva={props.icon || 'plus-circle-outline'}
        data-eva-animation={props.animation || 'none'}
        data-eva-fill={props.color || '#000000'}
        data-eva-width={props.size || '1.6rem'}
        data-eva-height={props.size || '1.6rem'}>
      </i>
    </span>
    {props.text ? <text>{props.text}</text> : ''}
  </div>