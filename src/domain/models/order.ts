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

export type NewOrderwithClientId = Omit<Order, 'id'>


export type NewOrder = Omit<Order, 'id' | 'clientId'>

export type ProductsDetails = [
  orderId: string,
  productId: string,
  quantity: number,
]

export type OrderStatus = 'Pendente' | 'Em andamento' | 'Entregue'

export type OrderWithStatus = Omit<Order, 'productsInfos'> & OrderStatus

