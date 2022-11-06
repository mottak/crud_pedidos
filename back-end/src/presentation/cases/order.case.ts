import { CustomError } from '$/data/errors'
import { IOrderCase } from '$/domain/cases/order.case'
import { Message } from '$/domain/generics/message'
import { NewOrder, Order, OrderStatus } from '$/domain/models'
import { IAddressTasks, IAuthTask, IOrderTasks } from '../tasks'

export class OrderCase implements IOrderCase {
  constructor(
    readonly orderTask: IOrderTasks,
    readonly userAuth: IAuthTask,
    readonly addressTask: IAddressTasks
  ) { }

  async add(token: string | undefined, data: NewOrder): Promise<Order> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    const payload = await this.userAuth.verify(token)

    if (payload.role !== 'client') throw new CustomError('Only users who has the role client, can add new orders', 'UnauthorizedError')

    const newOrderwithClientId = { clientId: payload.id, ...data }

    await this.addressTask.findByClientId(payload.id)

    const order = await this.orderTask.add(newOrderwithClientId)
    return order
  }
  async read(token: string | undefined): Promise<Order[]> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    const payload = await this.userAuth.verify(token)
    return await this.orderTask.read(payload.id, payload.role)

  }
  async readOne(token: string | undefined, id: Order['id']): Promise<Order> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    const payload = await this.userAuth.verify(token)
    return await this.orderTask.readOne(id, payload)
  }
  async update(token: string | undefined, id: string, status: OrderStatus): Promise<Message> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    console.log('status da venda -----', status)
    const payload = await this.userAuth.verify(token)
    console.log('payload ----', payload.id)
    if (payload.role === 'client' && status === 'Em andamento') {
      console.log('if do cliente')
      throw new CustomError("Only user who the role is 'seller' can to 'Em andamento'", 'UnauthorizedError')
    }
    if (payload.role === 'seller' && status === 'Entregue') throw new CustomError("Only user who the role is 'client' can to 'Entregue'", 'UnauthorizedError')
    await this.orderTask.update(id, status)
    return { message: `Order status ${id} has been updated successfully` }
  }

  async delete(token: string | undefined, id: string,): Promise<Message> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    await this.orderTask.delete(id)
    return { message: `Order status ${id} has been deleted successfully` }
  }
}