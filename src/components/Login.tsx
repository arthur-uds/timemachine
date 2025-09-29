import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './Login.css'

// Importar a imagem do logo original
import logoTimeMachineAzul from '../../electron-app-develop-original/electron-app-develop/src/renderer/assets/logo-time-machine-azul.png'
import logoCompletaBranco from '../../electron-app-develop-original/electron-app-develop/src/renderer/assets/logo-completa-branco.png'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validação básica conforme o original
    if (!email) {
      setError('E-mail inválido.')
      return
    }
    if (!password) {
      setError('Senha inválida.')
      return
    }

    const success = await login(email, password)
    if (!success) {
      setError('E-mail ou senha inválidos.')
    }
  }

  const closeApp = () => {
    // Implementação para fechar o app Electron
    // Em um ambiente Electron real, você usaria ipcRenderer
    // window.electronAPI.closeApp()
    console.log('Fechando o aplicativo...')
  }

  return (
    <div id="login" className="login-container">
      <div className="draggable-header">
        <img src={logoCompletaBranco} alt="Logo UDS" className="logo-uds" />
        <button className="nodraggable close-button" onClick={closeApp}>
          <span className="material-icons">close</span>
        </button>
      </div>

      <div className="login-content">
        <img className="logo-time-machine" src={logoTimeMachineAzul} alt="Time Machine Logo" />
        <span className="title">Time Machine</span>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="sr-only">Login</label>
          <div className="input-with-icon">
            <span className="material-icons">email</span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Login"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="sr-only">Senha</label>
          <div className="input-with-icon">
            <span className="material-icons">vpn_key</span>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
            <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              <span className="material-icons">{showPassword ? 'visibility' : 'visibility_off'}</span>
            </button>
          </div>
        </div>
        
        {error && (
          <div className="alert error-alert">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          className="login-button gradient"
          disabled={isLoading}
        >
          {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
        </button>
      </form>
    </div>
  )
}

export default Login
 default Login
