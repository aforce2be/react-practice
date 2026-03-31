import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface FormInputProps {
  label: string
  type?: string
  placeholder?: string
  register: UseFormRegisterReturn
  error?: FieldError
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  register,
  error,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-lg border px-3 py-2 outline-none transition ${
          error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  )
}
