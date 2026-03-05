import axios from 'axios'
import { Product } from '../types/common.types'

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get('/api/product')
  return res.data
}

export const getProductDetail = async (id: number): Promise<Product[]> => {
  const res = await axios.get(`/api/product/${id}`)
  return res.data
}
