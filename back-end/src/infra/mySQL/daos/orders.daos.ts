import { IOrderRepo } from '$/data/repos/orders.repo'
import { Order } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { InsertOrder } from '../queries'

export class OrderDAO implements IOrderRepo {
  async add(data: Order): Promise<void> {
    await mysqlHelper.client.query(InsertOrder, [data.id, data.clientId, data.sellerId])
  }


}