import { CustomError } from '$/data/errors'
import { IProductCase } from '$/domain/cases'
import { NewProduct, Product, ProductWithSellerId } from '$/domain/models'
import { IAuthTask, IProductTasks } from '../tasks'

export class ProductCase implements IProductCase {
  constructor(
    readonly productsTasks: IProductTasks,
    readonly userAuth: IAuthTask
  ) { }

  async add(token: string | undefined, data: NewProduct): Promise<Product> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    const payload = await this.userAuth.verify(token)
    if (!payload) {
      throw new CustomError('Invalid token. Please login!', 'UnauthorizedError')
    }
    if (payload.role !== 'seller') {
      throw new CustomError('You must be a seller to create a product!', 'UnauthorizedError')
    }
    const newProduct: ProductWithSellerId = {
      sellerId: payload.id,
      ...data
    }
    const product = await this.productsTasks.add(newProduct)
    return product
  }
  async read(): Promise<Product[]> {

    const products = await this.productsTasks.read()
    return products
  }
  async readOne(id: string): Promise<Product> {

    const products = await this.productsTasks.readOne(id)
    return products
  }
  async update(token: string | undefined, id: Product['id'], data: NewProduct): Promise<Product> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    const payload = await this.userAuth.verify(token)
    if (!payload) throw new CustomError('Invalid token. Please login!', 'UnauthorizedError')

    if (payload.role !== 'seller') throw new CustomError('You must be a seller to update a product!', 'UnauthorizedError')

    const exists = await this.productsTasks.readOneBySeller(id, payload.id)
    if (!exists) throw new CustomError("This product doesn't exist", 'BadRequest')

    const updated = await this.productsTasks.update(id, { sellerId: payload.id, ...data })
    return updated
  }

  async delete(token: string | undefined, id: string): Promise<void> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    const payload = await this.userAuth.verify(token)
    if (!payload) {
      throw new CustomError('Invalid token. Please login!', 'UnauthorizedError')
    }
    if (payload.role !== 'seller') {
      throw new CustomError('You must be a seller to delete a product!', 'UnauthorizedError')
    }
    const product = await this.productsTasks.readOne(id)
    if (payload.role !== product.sellerId) throw new CustomError("You aren't the owner of this product. You can't delete this product", 'UnauthorizedError')
    await this.productsTasks.delete(id)

  }
}