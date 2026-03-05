import { useProducts } from '../../hooks/useProducts'

export default function ProductListPage() {
  const { data, isLoading } = useProducts()

  if (isLoading) return <div>loading..</div>

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          {product.name}={product.price}
        </div>
      ))}
    </div>
  )
}
