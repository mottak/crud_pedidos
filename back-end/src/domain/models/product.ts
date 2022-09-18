export type Product = {
  id: string
  name: string
  quantity: number
  price: number
}

export type NewProduct = Omit<Product, 'id'>