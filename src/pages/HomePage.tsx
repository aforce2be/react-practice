import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
  const { isLogin, user, logout } = useAuth()

  return (
    <div>
      <h1>Home Page</h1>
      <p>Login status: {isLogin ? 'Logged in' : 'Logged out'}</p>
      <p>Current user: {user ? user.name : 'None'}</p>

      {isLogin && (
        <div style={{ marginTop: '8px' }}>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default HomePage
