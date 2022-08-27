import connection from '../database/connection';
import { RowDataPacket } from 'mysql2'
import query from '../database/queries/products'
import { INewProduct, IProduct } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

const create = async (productData: INewProduct): Promise<string | null | false> => {
  const {
    name, quantity, price
  } = productData;
  const productId = uuidv4();
  const [newproduct] = await connection.execute(query.InsertProduct, [productId, name, quantity, price]);
  if (newproduct) return productId;
  return false;
};


const listAll = async (): Promise<IProduct[]> => {
  const [allProducts] = await connection.execute(query.findAllProducts);
  return allProducts as IProduct[];
}

const findByName = async (name: string): Promise<IProduct> => {
  const [[product]] = await connection.execute<RowDataPacket[]>(query.findProductsByName, [name]);
  return product as IProduct;
}

const update = async (id: string, productData: INewProduct): Promise<IProduct> => {
  const {
    name, quantity, price
  } = productData;
  await connection.execute(query.updateProduct, [name, quantity, price, id]);
  return { id, ...productData };
}

const deleteProduct = async (id: string) => {
  return connection.execute(query.deleteProduct, [id]);

}

export default { listAll, create, findByName, update, deleteProduct };
