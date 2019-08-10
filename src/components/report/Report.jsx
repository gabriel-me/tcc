import React from 'react'
import { Link } from 'react-router-dom'
import { Close, Peoples, DoneAll, Layer } from '../utils/icons/Icon'
import './report.css'

export default () => 
  <div>
    <Link to="/home"><span id="close"><Close /></span></Link>
    <div className="form-container">
      <div className="form-content">
        <header>
          <h1>Relatórios</h1>
        </header>
        <section className="report-container">
          <div className="card-report">
            <Link to="/report/task">
              <div>
                <header>
                  <h2>Tarefas no prazo</h2>
                  <DoneAll />
                </header>
                <p>Tarefas que você conseguio concluir no prazo estipulado</p>
              </div>
            </Link>
          </div>
          <div className="card-report">
            <Link to="/report/project">
              <div>
                <header>
                  <h2>Projetos no prazo</h2>
                  <Layer />
                </header>
                <p>Projetos que você conseguio concluir no prazo estipulado</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="report-container">
          <div className="card-report">
            <Link to="/report/ranking">
              <div>
                <header>
                  <h2>Ranking</h2>
                  <Peoples />
                </header>
                <p>Saiba como anda o seu desempenho e o da sua equipe</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  </div>