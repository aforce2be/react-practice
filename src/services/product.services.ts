import { Product } from '../types/common.types'

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: '노트북', price: 150000 },
        { id: 2, name: '마우스', price: 50000 },
        { id: 3, name: '키보드', price: 100000 },
      ])
    }, 800)
  })
}
