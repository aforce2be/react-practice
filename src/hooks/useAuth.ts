import { isLoggedInAtom, userAtom } from '../jotai/auth.atom'
import { useAtom } from 'jotai'

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)
  const [user, setUser] = useAtom(userAtom)

  const login = () => {
    setIsLoggedIn(true)
    setUser({
      id: 1,
      name: 'Esther',
    })
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return {
    isLoggedIn,
    user,
    login,
    logout,
  }
}
