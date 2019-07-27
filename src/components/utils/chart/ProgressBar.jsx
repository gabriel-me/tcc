import React from 'react'
import './progress-bar.css'

export default props => {
  let initialTime = new Date(props.initialTime).getTime()
  let finalTime = new Date(props.finalTime).getTime()
  let totalTime = finalTime - initialTime
  let currentTime = new Date().getTime() - initialTime
  let size = ((currentTime * 100) / totalTime);
  let divStyle = { width: props.size || `${(size > 0 && size < 100) ? size : '100'}%` }
  return <div className="progress-bar">{props.text}<span className="progress" style={divStyle}></span></div>
}