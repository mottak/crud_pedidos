import connection from '../database/connection';
import query from '../database/queries/products'
import { IProduct } from '../interfaces'
// import { v4 as uuidv4 } from 'uuid'

// const create = async (productData: ): Promise<string | null> => {

// };


const listAll = async (): Promise<IProduct[]> => {
  const [allProducts] = await connection.execute(query.findAllProducts);
  return allProducts as IProduct[];
}

export default { listAll };
