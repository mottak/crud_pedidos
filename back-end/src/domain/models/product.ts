export type Product = {
  id: string
  name: string
  quantity: number
}

export type NewProduct = Omit<Product, 'id'>