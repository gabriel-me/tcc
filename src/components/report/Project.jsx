import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Icon'
import Chart from '../utils/chart/Chart'

const URL = `http://localhost:8082/user/${window.localStorage.getItem('id')}`

export default class extends Component {
  constructor(props) {
    super(props)
    this.getChartData = this.getChartData.bind(this)
    this.state = { chart: '' }
    this.getChartData()
  }

  getChartData() {
    axios.get(URL).then(result => {
      let chartData = {
        labels: ['Dentro do prazo', 'Fora do prazo'],
        datasets: [
          {
            data: [result.data.doneProject, result.data.notDoneProject],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
      this.setState({
        ...this.state,
        chart: <Chart chartData={chartData} legendPosition="bottom" />
      })
    })
  }

  render() {
    return (
      <div>
        <Link to="/report"><span id="close"><Close /></span></Link>
        <div className="form-container">
          <div className="form-content">
            <header>
              <h1>Entrega de projetos</h1>
            </header>
            {this.state.chart}
          </div>
        </div>
      </div>
    )
  }
}