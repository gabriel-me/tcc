import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './input.css'
import axios from 'axios'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value || '',
      style: { 
        position: 'relative', 
        width: this.props.width || '25rem' 
      },
      dropdown: '',
      valueHidden: ''
    }
    this.valueState = this.valueState.bind(this)
    this.renderDropdown = this.renderDropdown.bind(this)
    this.renderDropdownAll = this.renderDropdownAll.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
    this.selected = this.selected.bind(this)
  }

  selected(id, name) {
    this.setState({
      ...this.state,
      valueHidden: id,
      value: name
    })
  }

  renderDropdown(data) {
    return data.map((item, i) => 
      <div key={i} onClick={
        () => this.selected(item._id, `${item.name || ''} ${item.lastName || ''}`)}>
        {`${item.name || ''} ${item.lastName || ''}`}
      </div>
    )
  }

  renderDropdownAll(data) {
    return data.map((item, i) => {
      let link = ''
      if (item.lastName) {
        link = `/user/${item.id}`
      } else if (item.color) {
        link = `/project/${item.id}`
      } else {
        link = `/task/${item.id}`
      }
      return <Link to={link}>
        <div key={i} onClick={
          () => this.selected(item._id, `${item.name || ''} ${item.lastName || ''}`)}>
          {`${item.name || ''} ${item.lastName || ''}`}
        </div>
      </Link>
    })
  }

  queryAPI(URL) {
    axios.get(`http://localhost:8082/${URL}`).then(result => {
      let data = []
      if (this.props.class) {
        result.data.friends.forEach(friend => {
          data.push(friend)
        })
        result.data.projects.forEach(project => {
          project.name = `Projeto - ${project.name}`
          data.push(project)
        })
        result.data.tasks.forEach(task => {
          data.push(task)
        })
      } else {
        data = result.data
      }
      
      this.setState({
        ...this.state,
        dropdown: 
          <div className="dropdownInput">
            {this.props.class ? this.renderDropdownAll(data) : this.renderDropdown(data) }
          </div>
      })
    })
  }

  closeDropdown() {
    if (this.props.url) {
      setTimeout(() => {
        this.setState({
          ...this.state,
          dropdown: ''
        })
      }, 500);
    }
  }

  valueState() {
    const btn = document.querySelector(`input[name="${this.props.name}"]`)
    this.setState({
      ...this.state,
      value: btn.value
    })
    if(this.props.url)
      this.queryAPI(this.props.url)
  }

  render() {
    return (
      <label style={this.state.style} className={this.props.class || 'matter-textfield-outlined matter-primary'}>
        {this.props.class ? '' : <span className="matter-tooltip"></span>}
        <input
          name={this.props.name || ''}
          type={this.props.type || 'text'}
          placeholder=" "
          required={this.props.required ? 'required' : ''}
          autoFocus={this.props.autoFocus ? 'autoFocus' : ''}
          value={this.state.value}
          onChange={this.valueState}
          onBlur={this.closeDropdown} />
        <span>{this.props.label || ''}</span>
        {this.props.url ? 
          <input
            type="hidden"
            value={this.state.valueHidden || ''}
          ></input> : ''}
        {this.state.dropdown}
      </label>
    )
  }
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

export class Date extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        value: '', 
        style: { width: this.props.width || '25rem' } 
    }
    this.dateState = this.dateState.bind(this)
    this.dateMask = this.dateMask.bind(this)
  }

  dateState() {
    const btn = document.querySelector(`input[name="${this.props.name}"]`)
    this.setState({
      ...this.state,
      value: this.state.value <= btn.value
        ? this.dateMask(btn.value)
        : btn.value
    })
  }

  dateMask(date) {
    if (date.length === 2 || date.length === 5) 
      return `${date}/`
    return date
  }

  render() {
    return (
      <label style={this.state.style} className="matter-textfield-outlined matter-primary">
        <span className="matter-tooltip"></span>
        <input
          name={this.props.name || ''}
          type="text"
          placeholder=" "
          required={this.props.required ? 'required' : ''}
          autoFocus={this.props.autoFocus ? 'autoFocus' : ''}
          value={this.state.value}
          onChange={this.dateState}
          maxLength="10" />
        <span>{this.props.label || ''}</span>
      </label>
    )
  }
}