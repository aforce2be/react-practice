import { useForm } from 'react-hook-form'
import FormInput from '../components/molecules/FormInput'
import { LoginFormValues } from '../types/auth.interface'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data)
      alert('로그인 성공')
    } catch (error) {
      console.error(error)
      alert('로그인 실패')
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold">로그인</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="이메일"
          type="email"
          placeholder="example@email.com"
          register={register('email', {
            required: '이메일은 필수입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
          error={errors.email}
        />

        <FormInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={register('password', {
            required: '비밀번호는 필수입니다.',
            minLength: {
              value: 6,
              message: '비밀번호는 6자 이상이어야 합니다.',
            },
          })}
          error={errors.password}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isSubmitting ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </div>
  )
}
