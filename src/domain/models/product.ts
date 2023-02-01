export type Product = {
  id: string
  sellerId: string,
  name: string
  quantity: number
  price: number
  photo?: string
}

export type NewProduct = Omit<Product, 'id' | 'sellerId'>

export type ProductWithSellerId = Omit<Product, 'id'>