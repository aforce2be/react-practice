import { useQuery } from 'react-query'
import { getProductDetail, getProducts } from '../services/product.services'

export const useProducts = () => {
  return useQuery(['products'], getProducts)
}

export const useProductDetail = (id: number) => {
  return useQuery(['product', id], () => getProductDetail(id), {
    enabled: !!id,
  })
}
