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

const listById = async (id: string): Promise<IOrder> => {
  return orderModel.listById(id)
}

// const update = async (id: string, orderData: INewOrder): Promise<IOrder> => {
//   return orderModel.update(id, orderData)
// }

const deleteOrder = async (id: string,) => {
  return orderModel.deleteOrder(id)
}

export default { create, listAll, listById, deleteOrder };
