import productModel from '../models/productsModel';
import { INewProduct, IProduct } from '../interfaces'

const create = async (productData: INewProduct): Promise<IProduct | false | string> => {
  const productExists = await productModel.findByName(productData.name)

  if (productExists) {
    return 'Não é possivel criar um novo produto com o nome de um produto existente'
  }

  const newProduct = await productModel.create(productData);
  if (newProduct) {

    return {
      id: newProduct,
      ...productData
    }
  }
  return false;

};

const listAll = async (): Promise<IProduct[]> => {
  return productModel.listAll();
}


export default { create, listAll };
