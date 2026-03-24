import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = () => {
  const { isLogin } = useAuth()
  const location = useLocation()

  if (!isLogin) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
