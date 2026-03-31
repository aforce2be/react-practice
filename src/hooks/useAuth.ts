import { useAtomValue, useSetAtom } from 'jotai'
import { loginApi } from '../services/auth.services'
import { LoginFormValues } from '../types/auth.interface'
import { userAtom } from '../jotai/auth.atom'

export function useAuth() {
  const user = useAtomValue(userAtom)
  const setUser = useSetAtom(userAtom)

  const login = async (formValues: LoginFormValues) => {
    const nextUser = await loginApi(formValues)
    setUser(nextUser)
    return nextUser
  }

  const logout = () => {
    setUser(null)
  }

  return {
    isLogin: user !== null,
    user,
    login,
    logout,
  }
}
