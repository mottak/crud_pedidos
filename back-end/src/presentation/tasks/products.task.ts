import { NewProduct, Product } from '$/domain/models'

export interface IProductTasks {
  add(data: NewProduct): Promise<Product>
  read(): Promise<Product[]>
  readOne(id: string): Promise<Product>
  // update(id: string, data: Product): Promise<Product>
  // delete(id: string): Promise<Product>

}
