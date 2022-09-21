import { NewProduct, Product } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IProductsRepo } from '../../../data/repos'
import { deleteProduct, findAllProducts, findProductsById, InsertProduct, updateProduct } from '../queries'

export class ProductDAO implements IProductsRepo {

  async add(data: Product): Promise<void> {
    await mysqlHelper.client.query(InsertProduct, [data.id, data.name, data.quantity, data.price])
  }
  async read(): Promise<Product[]> {
    const [products] = await mysqlHelper.client.query<RowDataPacket[]>(findAllProducts)
    return products as Product[]
  }
  async readOne(id: string): Promise<Product> {
    const [[products]] = await mysqlHelper.client.query<RowDataPacket[]>(findProductsById, id)
    return products as Product
  }
  async update(id: string, data: NewProduct): Promise<void> {
    await mysqlHelper.client.query(updateProduct, [data.name, data.quantity, data.price, id])

  }

  async delete(id: string): Promise<void> {
    await mysqlHelper.client.query(deleteProduct, [id])
  }

}