import React from 'react'
import './progress-bar.css'

export default props => {
  let divStyle = { width: props.size };
  return <div className="progress-bar">{props.text}<span className="progress" style={divStyle}></span></div>
}