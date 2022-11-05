import { NewOrderwithClientId, Order, OrderStatus } from '$/domain/models'

export interface IOrderTasks {
  add(data: NewOrderwithClientId): Promise<Order>
  read(): Promise<Order[]>
  readOne(id: string): Promise<Order>
  update(id: string, status: OrderStatus): Promise<void>
  delete(id: string): Promise<void>

}
