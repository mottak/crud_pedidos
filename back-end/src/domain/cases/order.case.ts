import { Message } from '../generics/message'
import { NewOrder, Order, OrderStatus } from '../models'

export interface IOrderCase {
  add(token: string, data: NewOrder): Promise<Order>
  read(token: string): Promise<Order[]>
  readOne(token: string, id: string): Promise<Order>
  update(token: string, id: string, data: OrderStatus): Promise<Message>
  delete(token: string, id: string): Promise<Message>
}