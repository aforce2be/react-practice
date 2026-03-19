import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
  const { isLogin, user, login, logout } = useAuth()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      setError('')
      await login(id, pw)
    } catch (e: any) {
      setError(e.message)
    }
  }

  const handleLogout = () => {
    logout()
    setError('')
  }

  return (
    <div>
      <h1>Home Page</h1>

      <p>Login status: {isLogin ? 'Logged in' : 'Logged out'}</p>
      <p>Current user: {user ? user.name : 'None'}</p>

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
        <button onClick={handleLogout} style={{ marginLeft: '8px' }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default HomePage
