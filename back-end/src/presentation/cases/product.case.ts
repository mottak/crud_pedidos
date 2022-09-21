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
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    const product = await this.productsTasks.add(data)
    return product
  }
  async read(token: string | undefined): Promise<Product[]> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')

    await this.userAuth.verify(token)
    const products = await this.productsTasks.read()
    return products
  }
  async readOne(token: string | undefined, id: string): Promise<Product> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    await this.userAuth.verify(token)

    const products = await this.productsTasks.readOne(id)
    return products
  }
  async update(token: string | undefined, id: string, data: NewProduct): Promise<Product> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    await this.userAuth.verify(token)

    const exists = await this.productsTasks.readOne(id)
    if (!exists) throw new CustomError("This product doesn't exist", 'BadRequest')

    const updated = await this.productsTasks.update(id, data)
    return updated
  }

  async delete(token: string | undefined, id: string): Promise<void> {
    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    await this.userAuth.verify(token)

    const exists = await this.productsTasks.readOne(id)
    if (!exists) throw new CustomError("This product doesn't exist", 'BadRequest')
    // servidor quebra quando produto não existe no banco

    await this.productsTasks.delete(id)
  }
}