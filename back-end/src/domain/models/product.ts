export type Product = {
  id: string
  name: string
  quantity: number
  price: number
  photo?: string
}

export type NewProduct = Omit<Product, 'id'>