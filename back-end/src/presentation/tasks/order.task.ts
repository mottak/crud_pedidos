import { NewOrder, Order, OrderStatus } from '$/domain/models'

export interface IOrderTasks {
  add(data: NewOrder): Promise<Order>
  read(): Promise<Order[]>
  readOne(id: string): Promise<Order>
  update(id: string, status: OrderStatus): Promise<void>
  delete(id: string): Promise<void>

}
