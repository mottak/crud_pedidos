export type Order = {
  id: string
  clientId: string
  sellerId: string
}

export type NewOrder = Omit<Order, 'id'>