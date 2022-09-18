import { NewProduct, Product } from '../models'

export interface IProductCase {
  add(token: string, data: NewProduct): Promise<Product>
}