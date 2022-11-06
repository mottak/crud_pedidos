import { NewOrderwithClientId, Order, OrderStatus, ProductsDetails, User } from '$/domain/models'
import { IOrderTasks } from '$/presentation/tasks'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
import { IOrderRepo } from '../repos'

export class OrderTask implements IOrderTasks {
  constructor(
    readonly orderRepo: IOrderRepo,
    readonly createUUIDContract: ICreateUUID
  ) { }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async add(data: NewOrderwithClientId): Promise<Order> {
    const { productsInfos } = data
    const orderId = await this.createUUIDContract.create()

    const productsIdString = productsInfos.map((product): ProductsDetails =>
      [orderId, product.productId, product.quantity]
    )
    const order = {
      id: orderId,
      ...data
    }
    await this.orderRepo.add(order, productsIdString)
    return order
  }

  async read(userId: User['id'], userPayload: User['role']): Promise<Order[]> {
    if (userPayload === 'client') {
      return this.orderRepo.getClientOrders(userId)

    }
    return this.orderRepo.getSellerOrders(userId)
  }
  async readOne(orderId: Order['id'], payload: User): Promise<Order> {
    if (payload.role === 'client') {
      return this.orderRepo.getOneClient(orderId, payload.id)
    }

    return this.orderRepo.getOneSeller(orderId, payload.id)
  }
  async update(id: Order['id'], data: OrderStatus): Promise<void> {
    const orderExists = await this.orderRepo.verifyOne(id)
    if (!orderExists) throw new CustomError("This isn't a valid order. Please inform a valid one", 'NotFound')
    const updated = await this.orderRepo.update(id, data)
    if (!updated) throw new CustomError('Unable to update', 'BadRequest')
  }

  // async delete(id: Order['id']): Promise<void> {
  //   const orderExists = await this.orderRepo.verifyOne(id)
  //   if (!orderExists) throw new CustomError("This isn't a valid order. Please inform a valid one", 'NotFound')
  //   const deleted = await this.orderRepo.delete(id)
  //   if (!deleted) throw new CustomError('Unable to delete', 'BadRequest')
  // }

}