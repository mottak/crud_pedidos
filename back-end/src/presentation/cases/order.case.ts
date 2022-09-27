import { CustomError } from '$/data/errors'
import { IOrderCase } from '$/domain/cases/order.case'
import { NewOrder, Order } from '$/domain/models'
import { IAuthTask, IOrderTasks } from '../tasks'

export class OrderCase implements IOrderCase {
  constructor(
    readonly orderTask: IOrderTasks,
    readonly userAuth: IAuthTask
  ) { }
  async add(token: string | undefined, data: NewOrder): Promise<Order> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    const order = await this.orderTask.add(data)
    return order
  }
  async read(token: string | undefined): Promise<Order[]> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    return await this.orderTask.read()

  }
  async readOne(token: string | undefined, id: string): Promise<Order> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    return await this.orderTask.readOne(id)
  }

}