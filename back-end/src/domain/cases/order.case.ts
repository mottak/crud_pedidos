import { Message } from '../generics/message'
import { NewOrder, Order, OrderStatus } from '../models'

export interface IOrderCase {
  add(token: string, data: NewOrder): Promise<Order>
  read(token: string): Promise<Order[]>
  readOne(token: string, id: Order['id']): Promise<Order>
  update(token: string, id: Order['id'], data: OrderStatus): Promise<Message>
  delete(token: string, id: Order['id']): Promise<Message>
}