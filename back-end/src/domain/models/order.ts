export type ProductsInfo = {
  productId: string,
  quantity: number
}

export type Order = {
  id: string
  clientId: string
  sellerId: string
  productsInfos: Array<ProductsInfo>
}

export type NewOrder = Omit<Order, 'id'>

export type ProductsDetails = [
  orderId: string,
  productId: string,
  quantity: number,
]


