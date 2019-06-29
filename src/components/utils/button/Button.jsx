import React from 'react'

export default props =>
  <button className="matter-button-contained matter-primary">{props.label || 'Adicionar'}</button>

export const Outline = props =>
  <button className="matter-button-outlined matter-primary">{props.label || 'Adicionar'}</button>