import { NewProduct, Product } from '$/domain/models'
import { IProductTasks } from '$/presentation/tasks/products.task'
import { ICreateUUID } from '../contracts'
import { IProductsRepo } from '../repos'

export class ProductTask implements IProductTasks {
  constructor(
    readonly productRepo: IProductsRepo,
    readonly createUUIDContract: ICreateUUID
  ) { }
  async add(data: NewProduct): Promise<Product> {
    const newProduct = {
      id: this.createUUIDContract.create(),
      ...data
    }
    await this.productRepo.add(newProduct)
    return newProduct
  }
  async read(): Promise<Product[]> {
    const products = await this.productRepo.read()
    return products
  }
}