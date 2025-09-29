import React from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth()
  
  return (
    <div className="App">
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
