import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
  const { isLoggedIn, user, login, logout } = useAuth()
  return (
    <div>
      <h1>홈 페이지</h1>

      <p>현재 로그인 여부: {isLoggedIn ? '로그인' : '비로그인'}</p>
      <p>현재 사용자: {user ? user.name : '없음'}</p>

      <button onClick={login}>로그인</button>
      <button onClick={logout} style={{ marginLeft: '8px' }}>
        로그아웃
      </button>
    </div>
  )
}

export default HomePage
