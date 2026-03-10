import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/product.services'

export const useProducts = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  })
}
