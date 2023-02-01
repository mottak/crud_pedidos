import { Product, ProductWithSellerId, User } from '$/domain/models'
import { IProductTasks } from '$/presentation/tasks/products.task'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
import { IProductsRepo } from '../repos'

export class ProductTask implements IProductTasks {
  constructor(
    readonly productRepo: IProductsRepo,
    readonly createUUIDContract: ICreateUUID
  ) { }
  async add(data: ProductWithSellerId): Promise<Product> {
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
  async readOne(id: Product['id']): Promise<Product> {
    const product = await this.productRepo.readOne(id)
    if (!product) {
      throw new CustomError('There is no product with this id', 'BadRequest')
    }
    return product
  }
  async readOneBySeller(id: Product['id'], sellerId: User['id']): Promise<Product> {
    const product = await this.productRepo.readOneBySeller(id, sellerId)
    if (!product) {
      throw new CustomError('There is no product with this id', 'BadRequest')
    }
    return product
  }
  async update(id: Product['id'], data: ProductWithSellerId): Promise<Product> {
    await this.productRepo.update(id, data)
    const updated = {
      id,
      ...data
    }
    console.log('updated product', updated)
    return updated
  }
  async delete(id: Product['id']): Promise<void> {
    await this.productRepo.delete(id)

  }
}