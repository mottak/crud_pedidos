import { Product } from '$/domain/models'

export interface IProductsRepo {
  add(data: Product): Promise<void>
  read(): Promise<Product[]>
}