import React from 'react'
import './input.css'

export default props => {
  let style = {
    width: `${props.width || '25rem'}`
  }
  return (
    <label style={style} className="matter-textfield-outlined matter-primary">
      <span className="matter-tooltip"></span>
      <input type="email" placeholder=" " required />
      <span>{props.label || ''}</span>
    </label>
  )
}

export const Search = props => {

  const renderLi = array => array.map(index => <li>{index}</li>);
  
  return (
    <label className="matter-textfield-filled matter-primary">
      <input placeholder=" "></input>
      <span>{props.label}</span>
      <ul>{props.option ? renderLi(props.option) : ''}</ul>
    </label>
  )
}