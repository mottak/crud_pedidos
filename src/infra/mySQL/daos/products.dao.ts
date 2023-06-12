import { CustomError } from '$/data/errors'
import { NewProduct, Product, User } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IProductsRepo } from '../../../data/repos'
import { deleteProduct, findAllProducts, findProductsById, findProductsByIdAndSeller, InsertProduct, updateProduct } from '../queries'

export class ProductDAO implements IProductsRepo {

  async add(data: Product): Promise<void> {
    await mysqlHelper.client.query(InsertProduct, [data.id, data.sellerId, data.name, data.quantity, data.price])
  }
  async read(): Promise<Product[]> {
    const [products] = await mysqlHelper.client.query<RowDataPacket[]>(findAllProducts)
    return products as Product[]
  }
  async readOne(id: Product['id']): Promise<Product> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findProductsById, id)
    if (!row) {
      throw new CustomError("There is no product with the given id", 'BadRequest')
    }
    return row as Product
  }
  async readOneBySeller(id: Product['id'], sellerId: User['id']): Promise<Product> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findProductsByIdAndSeller, [id, sellerId])
    if (!row) {
      throw new CustomError("There is no product with the given id register by this seller", 'BadRequest')
    }
    return row as Product
  }
  async update(id: Product['id'], data: NewProduct): Promise<void> {
    await mysqlHelper.client.query(updateProduct, [data.name, data.quantity, data.price, id])

  }

  async delete(id: Product['id']): Promise<void> {
    await mysqlHelper.client.query(deleteProduct, [id])
  }

}