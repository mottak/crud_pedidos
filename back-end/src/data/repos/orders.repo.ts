import { Order, ProductsDetails } from '$/domain/models'

export interface IOrderRepo {
  add(data: Order, productsId: Array<ProductsDetails>): Promise<void>
  get(): Promise<Order[]>
  getOne(id: string): Promise<Order>
}