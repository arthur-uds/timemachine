import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import './Dashboard.css'

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Time Machine</h1>
        <div className="user-info">
          <span>Bem-vindo, {user?.name}!</span>
          <button onClick={logout} className="logout-button">
            Sair
          </button>
        </div>
      </header>
      
      <main className="dashboard-main">
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <p>Você está logado como: <strong>{user?.email}</strong></p>
          
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Projetos</h3>
              <p>Gerencie seus projetos</p>
            </div>
            
            <div className="dashboard-card">
              <h3>Tarefas</h3>
              <p>Acompanhe suas tarefas</p>
            </div>
            
            <div className="dashboard-card">
              <h3>Relatórios</h3>
              <p>Visualize relatórios de tempo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
