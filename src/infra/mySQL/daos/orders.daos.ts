import { CustomError } from '$/data/errors'
import { IOrderRepo } from '$/data/repos/orders.repo'
import { Order, OrderStatus, ProductsDetails, User } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import {
  deleteOrder, deleteOrderDetails,
  findAllOrdersClient,
  findAllOrdersSeller,
  findOrderByIdClient,
  findOrderByIdSeller,
  InsertOrder,
  insertOrderDetails,
  updateOrderStatus,
  verifyOrderById
} from '../queries'

export class OrderDAO implements IOrderRepo {
  async add(data: Order, productsId: Array<ProductsDetails>): Promise<void> {
    await mysqlHelper.client.query(InsertOrder, [data.id, data.clientId, data.sellerId])
    await mysqlHelper.client.query(insertOrderDetails, [productsId])
  }
  async getClientOrders(clientId: User['id']): Promise<Order[]> {
    const [orders] = await mysqlHelper.client.query<RowDataPacket[]>(findAllOrdersClient, [clientId])
    return orders as Order[]
  }
  async getSellerOrders(sellerId: User['id']): Promise<Order[]> {
    const [orders] = await mysqlHelper.client.query<RowDataPacket[]>(findAllOrdersSeller, [sellerId])
    return orders as Order[]
  }
  async getOneClient(orderId: Order['id'], userId: User['id']): Promise<Order> {
    const [[order]] = await mysqlHelper.client.query<RowDataPacket[]>(findOrderByIdClient, [orderId, userId])
    if (!order) throw new CustomError('You has no order with this id', 'BadRequest')
    return order as Order
  }
  async getOneSeller(orderId: Order['id'], userId: User['id']): Promise<Order> {
    const [[order]] = await mysqlHelper.client.query<RowDataPacket[]>(findOrderByIdSeller, [orderId, userId])
    if (!order) throw new CustomError('You has no order with this id', 'BadRequest')
    return order as Order
  }
  async verifyOne(id: Order['id']): Promise<Order> {
    const [[order]] = await mysqlHelper.client.query<RowDataPacket[]>(verifyOrderById, [id])
    return order as Order
  }
  // atualiza somente o status
  async update(id: Order['id'], status: OrderStatus): Promise<RowDataPacket> {
    const [updated] = await mysqlHelper.client.query<RowDataPacket[]>(updateOrderStatus, [status, id])
    return updated as RowDataPacket
  }

  async delete(id: Order['id']): Promise<RowDataPacket> {
    const [deleted] = await mysqlHelper.client.query<RowDataPacket[]>(deleteOrder, [id])
    await mysqlHelper.client.query(deleteOrderDetails, [id])
    return deleted as RowDataPacket
  }

}