import { Product } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IProductsRepo } from '../../../data/repos'
import { findAllProducts, InsertProduct } from '../queries'

export class ProductDAO implements IProductsRepo {
  async add(data: Product): Promise<void> {
    await mysqlHelper.client.query(InsertProduct, [data.id, data.name, data.quantity, data.price])
  }
  async read(): Promise<Product[]> {
    const [products] = await mysqlHelper.client.query<RowDataPacket[]>(findAllProducts)
    return products as Product[]
  }

}