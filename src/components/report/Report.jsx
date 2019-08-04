import React from 'react'
import { Link } from 'react-router-dom'
import { Close, Peoples, Like, Deslike, Layer } from '../utils/icons/Icon'
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
            <Link to="/report">
              <div>
                <header>
                  <h2>Dentro prazo</h2>
                  <Like />
                </header>
                <p>Tarefas que você conseguio concluir dentro do prazo estipulado</p>
              </div>
            </Link>
          </div>
          <div className="card-report">
            <Link to="/home">
              <div>
                <header>
                  <h2>Fora do prazo</h2>
                  <Deslike />
                </header>
                <p>Tarefas que você não conseguio concluir no prazo estipulado</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="report-container">
          <div className="card-report">
            <Link to="/user">
              <div>
                <header>
                  <h2>Projetos</h2>
                  <Layer />
                </header>
                <p>Saiba como anda os projetos da sua equipe.</p>
              </div>
            </Link>
          </div>
          <div className="card-report">
            <Link to="/home">
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