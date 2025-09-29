import React, { useState } from 'react'
import './Login.css'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    // Validação básica conforme o original
    if (!email) {
      setError('E-mail inválido.')
      setIsLoading(false)
      return
    }
    if (!password) {
      setError('Senha inválida.')
      setIsLoading(false)
      return
    }

    // Simular autenticação
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        console.log('Login successful')
        // Em um cenário real, você redirecionaria para o dashboard
      } else {
        setError('E-mail ou senha inválidos.')
      }
      setIsLoading(false)
    }, 1000)
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
        <div className="empty-space"></div> {/* Para alinhar o logo ao centro */}
        <img src="/logo-completa-branco.png" alt="Logo UDS" className="logo-uds" />
        <button className="nodraggable close-button" onClick={closeApp}>
          <span className="material-icons">close</span>
        </button>
      </div>

      <div className="login-content">
        <img className="logo-time-machine" src="/logo-time-machine-azul.png" alt="Time Machine Logo" />
        <span className="title">Time Machine</span>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
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
