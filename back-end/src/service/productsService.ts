import productModel from '../models/productsModel';
import { IProduct } from '../interfaces'

// const create = async (productData: ): Promise<> => {


// };

const listAll = async (): Promise<IProduct[]> => {
  return productModel.listAll();
}


export default { listAll };
