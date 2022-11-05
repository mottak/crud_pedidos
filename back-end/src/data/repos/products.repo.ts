import { NewProduct, Product, User } from '$/domain/models'

export interface IProductsRepo {
  add(data: Product): Promise<void>
  read(): Promise<Product[]>
  readOne(id: Product['id']): Promise<Product>
  readOneBySeller(id: Product['id'], sellerId: User['id']): Promise<Product>
  update(id: Product['id'], data: NewProduct): Promise<void>
  delete(id: Product['id']): Promise<void>
}