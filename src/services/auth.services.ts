export const loginService = async (id: string, password: string) => {
  await new Promise((res) => setTimeout(res, 500))

  if (id === 'admin' && password === '1234') {
    return {
      id: 1,
      name: '관리자',
    }
  }

  throw new Error('로그인 실패')
}
