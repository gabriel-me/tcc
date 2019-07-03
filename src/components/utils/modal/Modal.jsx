import React, { Component } from 'react'
import './modal.css'

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-content">
            {this.props.contentHTML || ''}
          </div>
        </div>
      </div>
    )
  }
}