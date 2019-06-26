import React from 'react'
import './row.css'

const renderColumns = data => 
  data.map((d, i) => <div key={i} className={d.size + ' item' || '_20' + ' item'}>{d.text || ''}</div>);

export default props => 
  <div className={`col ${props.position || ''}`}>{renderColumns(props.cols)}</div>