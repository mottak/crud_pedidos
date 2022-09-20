import { NewProduct, Product } from '$/domain/models'

export interface IProductsRepo {
  add(data: Product): Promise<void>
  read(): Promise<Product[]>
  readOne(id: string): Promise<Product>
  update(id: string, data: NewProduct): Promise<void>
}