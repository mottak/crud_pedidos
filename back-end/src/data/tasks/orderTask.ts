import { NewOrder, Order, ProductsDetails } from '$/domain/models'
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

}