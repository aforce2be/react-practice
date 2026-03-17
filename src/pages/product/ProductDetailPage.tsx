import { Link, useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { data: products, isLoading, isError } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load product.</div>

  const productId = Number(id)
  const product = products?.find((item) => item.id === productId)

  if (!product) {
    return (
      <div>
        <p>Product not found.</p>
        <Link to="/products">Back to products</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>Price: {product.price.toLocaleString()}원</p>
      <Link to="/products">Back to products</Link>
    </div>
  )
}

export default ProductDetailPage
