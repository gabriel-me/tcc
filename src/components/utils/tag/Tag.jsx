import React, { Component } from 'react'
import './tag.css'

export default class Tag extends Component {
  
  constructor(props) {
    super(props)
    this.state = { selected: this.props.selected || 'unselect' }
    this.state = { value: this.props.value || '' }
    this.tagSelected = this.tagSelected.bind(this);
  }

  tagSelected() {
    this.setState({ 
      ...this.state, 
      selected: this.state.selected !== 'selected' ? 'selected' : 'unselect'
    })
    this.modifyURL()
  }

  modifyURL() {
    let partialURL = (this.state.selected !== 'selected') ? `#/${this.state.value}` : ''
    window.location.href = `${window.location.href}${partialURL}`
  }

  render() {
    return (
      <div onClick={() => this.tagSelected()} className={`tag ${this.state.selected}`}>#{this.props.text}</div>
    )
  }
}

