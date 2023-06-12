import { NewOrderwithClientId, Order, OrderStatus, User } from '$/domain/models'

export interface IOrderTasks {
  add(data: NewOrderwithClientId): Promise<Order>
  read(userId: User['id'], userPayload: User['role']): Promise<Order[]>
  readOne(orderId: Order['id'], payload: User): Promise<Order>
  update(id: Order['id'], status: OrderStatus): Promise<void>
  // delete(id: Order['id']): Promise<void>

}
