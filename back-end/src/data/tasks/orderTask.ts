import { NewOrder, Order, OrderStatus, ProductsDetails } from '$/domain/models'
import { IOrderTasks } from '$/presentation/tasks'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
import { IOrderRepo } from '../repos'

export class OrderTask implements IOrderTasks {
  constructor(
    readonly orderRepo: IOrderRepo,
    readonly createUUIDContract: ICreateUUID
  ) { }

  async add(data: NewOrder): Promise<Order> {
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

  async read(): Promise<Order[]> {
    const orders = await this.orderRepo.get()
    return orders
  }
  async readOne(id: string): Promise<Order> {
    const order = await this.orderRepo.getOne(id)
    if (!order) {
      throw new CustomError('There is no order with this id', 'BadRequest')
    }
    return order
  }
  async update(id: string, data: OrderStatus): Promise<void> {
    const orderExists = await this.orderRepo.verifyOne(id)
    if (!orderExists) throw new CustomError("This isn't a valid order. Please inform a valid one", 'NotFound')
    const updated = await this.orderRepo.update(id, data)
    if (!updated) throw new CustomError('Unable to update', 'BadRequest')
  }

  async delete(id: string): Promise<void> {
    const orderExists = await this.orderRepo.verifyOne(id)
    if (!orderExists) throw new CustomError("This isn't a valid order. Please inform a valid one", 'NotFound')
    const deleted = await this.orderRepo.delete(id)
    if (!deleted) throw new CustomError('Unable to delete', 'BadRequest')
  }

}