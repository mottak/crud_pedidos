import { NewProduct, Product } from '$/domain/models'
import { IProductTasks } from '$/presentation/tasks/products.task'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
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
  async readOne(id: string): Promise<Product> {
    const product = await this.productRepo.readOne(id)
    if (!product) {
      throw new CustomError('There is no order with this id', 'BadRequest')
    }
    return product
  }
  async update(id: string, data: NewProduct): Promise<Product> {
    await this.productRepo.update(id, data)
    const updated = {
      id,
      ...data
    }
    return updated
  }
  async delete(id: string): Promise<void> {
    await this.productRepo.delete(id)

  }
}