import orderModel from '../models/ordersModel';
import { INewOrder, IOrder } from '../interfaces'

const create = async (orderData: INewOrder): Promise<IOrder | false | string> => {
  const newOrder = await orderModel.create(orderData);
  if (newOrder) {

    return {
      id: newOrder,
      ...orderData
    }
  }
  return false;

};

const listAll = async (): Promise<IOrder[]> => {
  return orderModel.listAll();
}

// const listById = async (id: string): Promise<IProduct> => {
//   return productModel.listBId(id);
// }

// const update = async (id: string, productData: INewProduct): Promise<IProduct> => {
//   return productModel.update(id, productData)
// }

// const deleteProduct = async (id: string,) => {
//   return productModel.deleteProduct(id)
// }

export default { create, listAll };
