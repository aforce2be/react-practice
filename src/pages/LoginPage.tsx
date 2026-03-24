import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const LoginPage = () => {
  const { login, isLogin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')

  const from = location.state?.from?.pathname || '/'

  const handleLogin = async () => {
    try {
      setError('')
      await login(id, pw)
      navigate(from, { replace: true })
    } catch (e: any) {
      setError(e.message)
    }
  }

  if (isLogin) {
    return <Navigate to={from} replace />
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Please sign in to continue.</p>

      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '8px' }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
