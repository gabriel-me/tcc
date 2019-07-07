import React, { Component } from 'react'
import './input.css'

export default props => {
  let style = {
    width: `${props.width || '25rem'}`
  }
  return (
    <label style={style} className="matter-textfield-outlined matter-primary">
      <span className="matter-tooltip"></span>
      <input 
        name={props.name || ''} 
        type={props.type || 'text'}
        placeholder=" " 
        required={props.required ? 'required' : ''}
        autoFocus={props.autoFocus ? 'autoFocus' : ''} />
      <span>{props.label || ''}</span>
    </label>
  )
}

export const Search = props => {

  const renderLi = array => array.map(index => <li>{index}</li>);
  
  return (
    <label className="matter-textfield-filled matter-primary">
      <input name={props.name || ''} placeholder=" "></input>
      <span>{props.label}</span>
      <ul>{props.option ? renderLi(props.option) : ''}</ul>
    </label>
  )
}

export class Switch extends Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = { checked: false }
  }

  changeValue() {
    this.setState({
      ...this.state,
      checked: this.state.checked ? false : true
    })
  }
  
  render() {
    return (
      <label className="matter-switch">
        <input name={this.props.name || ''} type="checkbox" role="switch" 
        value={this.state.checked} onClick={this.changeValue} ></input>
        <span>{this.props.label || ''}</span>
      </label>
    )
  }
}