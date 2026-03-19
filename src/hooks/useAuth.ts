import { userAtom } from '../jotai/auth.atom'
import { useAtom } from 'jotai'
import { loginService } from '../services/auth.services'

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom)

  const login = async (id: string, password: string) => {
    const data = await loginService(id, password)
    setUser(data)
  }

  const logout = () => {
    setUser(null)
  }

  return {
    isLogin: !!user,
    user,
    login,
    logout,
  }
}
