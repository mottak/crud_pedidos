import { NewProduct, Product } from '../models'

export interface IProductCase {
  add(token: string, data: NewProduct): Promise<Product>
  read(token: string): Promise<Product[]>
  readOne(token: string, id: string): Promise<Product>
  update(token: string, id: string, data: NewProduct): Promise<Product>
}