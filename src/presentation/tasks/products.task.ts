import { NewProduct, Product, ProductWithSellerId, User } from '$/domain/models'

export interface IProductTasks {
  add(data: NewProduct): Promise<Product>
  read(): Promise<Product[]>
  readOne(id: Product['id']): Promise<Product>
  readOneBySeller(id: Product['id'], sellerId: User['id']): Promise<Product>
  update(id: Product['id'], data: ProductWithSellerId): Promise<Product>
  delete(id: Product['id']): Promise<void>

}
