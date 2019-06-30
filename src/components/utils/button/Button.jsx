import React from 'react'

export default props =>
  <button 
    onClick={ () => props.click ? props.click() : '' } 
    className="matter-button-contained matter-primary">
      {props.label || 'Adicionar'}
  </button>

export const Outline = props =>
  <button 
    onClick={ () => props.click ? props.click() : '' } 
    className="matter-button-outlined matter-primary">
      {props.label || 'Adicionar'}
  </button>