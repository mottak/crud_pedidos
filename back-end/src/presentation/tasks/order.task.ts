import { NewOrder, Order } from '$/domain/models'

export interface IOrderTasks {
  add(data: NewOrder): Promise<Order>
  read(): Promise<Order[]>
  readOne(id: string): Promise<Order>
  // update(id: string, data: NewOrder): Promise<Order>
  // delete(id: string): Promise<void>

}
