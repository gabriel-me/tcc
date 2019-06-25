import React from 'react'
import './row.css'

const renderColumns = data => 
  data.map((d, i) => <div key={i} className={d.size || '_20'}>{d.text || ''}</div>);

export default props => 
  <div className={`col ${props.position || ''}`}>{renderColumns(props.cols)}</div>