import { NewOrderwithClientId, Order, OrderStatus, User } from '$/domain/models'

export interface IOrderTasks {
  add(data: NewOrderwithClientId): Promise<Order>
  read(userId: User['id'], userPayload: User['role']): Promise<Order[]>
  readOne(id: string): Promise<Order>
  update(id: string, status: OrderStatus): Promise<void>
  delete(id: string): Promise<void>

}
