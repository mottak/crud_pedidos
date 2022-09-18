import { Order } from '$/domain/models'

export interface IOrderRepo {
  add(data: Order): Promise<void>
}