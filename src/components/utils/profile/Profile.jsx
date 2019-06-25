import React from 'react'
import './profile.css'

export default props => 
  <a href={`#${props.href || ''}`}>
    <span
      aria-label={props.title || ''}
      className={`hint--${props.titleLocation}`}
    >
      <img 
        className="profile-img" 
        src={`image/${props.src || 'profile.jpg'}`} 
        alt={props.title || ''} 
      ></img>
    </span>
  </a>