import { NewProduct, Product } from '$/domain/models'

export interface IProductTasks {
  add(data: NewProduct): Promise<Product>

}
