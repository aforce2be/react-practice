import { useProducts } from '../../hooks/useProducts'

const ProductListPage = () => {
  const { data: products, isLoading, isError } = useProducts()

  if (isLoading) return <div>로딩중..</div>
  if (isError) return <div>에러 발생!</div>

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            {product.name}-{product.price.toLocaleString()}원
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage
