import { Order, OrderStatus, ProductsDetails, User } from '$/domain/models'
import { RowDataPacket } from 'mysql2'

export interface IOrderRepo {
  add(data: Order, productsId: Array<ProductsDetails>): Promise<void>
  getClientOrders(clientId: User['id']): Promise<Order[]>
  getSellerOrders(sellerId: User['id']): Promise<Order[]>
  getOneClient(orderId: Order['id'], userId: User['id']): Promise<Order>
  getOneSeller(orderId: Order['id'], userId: User['id']): Promise<Order>
  verifyOne(id: Order['id']): Promise<Order>
  update(id: Order['id'], status: OrderStatus): Promise<RowDataPacket>
  delete(id: Order['id']): Promise<RowDataPacket>
}