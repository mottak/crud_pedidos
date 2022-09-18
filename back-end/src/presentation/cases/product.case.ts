import { CustomError } from '$/data/errors'
import { IProductCase } from '$/domain/cases'
import { NewProduct, Product } from '$/domain/models'
import { IAuthTask, IProductTasks } from '../tasks'

export class ProductCase implements IProductCase {
  constructor(
    readonly productsTasks: IProductTasks,
    readonly userAuth: IAuthTask
  ) { }
  async add(token: string | undefined, data: NewProduct): Promise<Product> {
    if (!token) {
      throw new CustomError('Please sign in', 'BadRequest')
    }
    await this.userAuth.verify(token)
    const product = await this.productsTasks.add(data)
    return product
  }
}