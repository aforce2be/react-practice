import { LoginFormValues } from '../types/auth.interface'

export async function loginApi(data: LoginFormValues) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (data.email === 'admin@test.com' && data.password === '123456') {
    return {
      id: 1,
      name: '관리자',
      email: data.email,
    }
  }

  throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.')
}
