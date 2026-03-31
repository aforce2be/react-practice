import { useForm } from 'react-hook-form'
import FormInput from '../../components/molecules/FormInput'
import { ProductCreateFormValues } from '../../types/product.interface'

export default function ProductCreatePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductCreateFormValues>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: ProductCreateFormValues) => {
    try {
      console.log('상품 등록 요청:', data)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert('상품 등록 완료')
      reset()
    } catch (error) {
      console.error(error)
      alert('상품 등록 실패')
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold">상품 등록</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="상품명"
          placeholder="상품명을 입력하세요"
          register={register('name', {
            required: '상품명은 필수입니다.',
            minLength: {
              value: 2,
              message: '상품명은 2자 이상이어야 합니다.',
            },
          })}
          error={errors.name}
        />

        <FormInput
          label="가격"
          type="number"
          placeholder="가격을 입력하세요"
          register={register('price', {
            required: '가격은 필수입니다.',
            valueAsNumber: true,
            min: {
              value: 1,
              message: '가격은 1 이상이어야 합니다.',
            },
          })}
          error={errors.price}
        />

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">설명</label>

          <textarea
            {...register('description', {
              required: '설명은 필수입니다.',
              minLength: {
                value: 10,
                message: '설명은 10자 이상 입력해주세요.',
              },
            })}
            className={`w-full rounded-lg border px-3 py-2 outline-none transition ${
              errors.description ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            rows={4}
            placeholder="상품 설명을 입력하세요"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isSubmitting ? '등록 중...' : '상품 등록'}
        </button>
      </form>
    </div>
  )
}
