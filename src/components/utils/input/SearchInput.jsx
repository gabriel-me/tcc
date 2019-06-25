import React from 'react'
import './search-input.css'

export default props => {

  const renderLi = array => array.map(index => <li>{index}</li>);
  
  return (
    <label className="matter-textfield-filled matter-primary">
      <input placeholder=" "></input>
      <span>{props.label}</span>
      <ul>{props.option ? renderLi(props.option) : ''}</ul>
    </label>
  )
}