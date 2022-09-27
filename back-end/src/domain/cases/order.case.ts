import { NewOrder, Order } from '../models'

export interface IOrderCase {
  add(token: string, data: NewOrder): Promise<Order>
  read(token: string): Promise<Order[]>
  readOne(token: string, id: string): Promise<Order>
  // update(token: string, id: string, data: NewOrder): Promise<Order>
  // delete(token: string, id: string): Promise<void>
}