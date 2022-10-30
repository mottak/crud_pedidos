import { Order, OrderStatus, ProductsDetails } from '$/domain/models'
import { RowDataPacket } from 'mysql2'

export interface IOrderRepo {
  add(data: Order, productsId: Array<ProductsDetails>): Promise<void>
  get(): Promise<Order[]>
  getOne(id: string): Promise<Order>
  verifyOne(id: string): Promise<Order>
  update(id: string, status: OrderStatus): Promise<RowDataPacket>
  delete(id: string): Promise<RowDataPacket>
}