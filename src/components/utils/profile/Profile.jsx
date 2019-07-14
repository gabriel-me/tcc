import React from 'react'
import './profile.css'

export default props => 
  <span
    aria-label={props.title || ''}
    className={`hint--${props.titleLocation}`}
  >
    <img id={props.id || ''}
      className="profile-img"
      src={props.src || '../image/profile.jpg'}
      alt={props.title || ''}
    ></img>
  </span>