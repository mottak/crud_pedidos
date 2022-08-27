import connection from '../database/connection';
import { RowDataPacket } from 'mysql2'
import query from '../database/queries/orders'
import { INewOrder, IOrder } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

const create = async (orderData: INewOrder): Promise<string | null | false> => {
  const {
    clientId, sellerId
  } = orderData;
  const orderId = uuidv4();
  const [newproduct] = await connection.execute(query.InsertOrder, [orderId, clientId, sellerId]);
  if (newproduct) return orderId;
  return false;
};


const listAll = async (): Promise<IOrder[]> => {
  const [allOrders] = await connection.execute(query.findAllOrders);
  return allOrders as IOrder[];
}

// const listBId = async (id: string): Promise<IProduct> => {
//   const [[product]] = await connection.execute<RowDataPacket[]>(query.findProductsById, [id]);
//   return product as IProduct;
// }



// const deleteOrder= async (id: string) => {
//   return connection.execute(query.deleteProduct, [id]);

// }

export default { create, listAll };
