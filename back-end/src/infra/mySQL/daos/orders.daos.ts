import { IOrderRepo } from '$/data/repos/orders.repo'
import { Order, ProductsDetails } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { findAllOrders, findOrderById, InsertOrder, insertOrderDetails } from '../queries'

export class OrderDAO implements IOrderRepo {
  async add(data: Order, productsId: Array<ProductsDetails>): Promise<void> {
    await mysqlHelper.client.query(InsertOrder, [data.id, data.clientId, data.sellerId])
    await mysqlHelper.client.query(insertOrderDetails, [productsId])
  }
  async get(): Promise<Order[]> {
    const [orders] = await mysqlHelper.client.query<RowDataPacket[]>(findAllOrders)
    return orders as Order[]
  }
  async getOne(id: string): Promise<Order> {
    const [[order]] = await mysqlHelper.client.query<RowDataPacket[]>(findOrderById, [id])
    return order as Order
  }


}