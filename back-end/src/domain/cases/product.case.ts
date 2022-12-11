import { NewProduct, Product } from '../models'

export interface IProductCase {
  add(token: string, data: NewProduct): Promise<Product>
  read(): Promise<Product[]>
  readOne(id: string): Promise<Product>
  update(token: string, id: string, data: NewProduct): Promise<Product>
  delete(token: string, id: string): Promise<void>
}