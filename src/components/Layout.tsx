import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Layout = () => {
  const { isLogin } = useAuth()

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ display: 'flex', gap: '12px' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {!isLogin && <Link to="/login">Login</Link>}
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
