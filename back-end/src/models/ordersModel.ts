import connection from '../database/connection';
import { RowDataPacket } from 'mysql2'
import query from '../database/queries/orders'
import { INewOrder, IOrder } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

const create = async (orderData: INewOrder): Promise<string | null | false> => {
  const {
    clientId, sellerId, productsId,
  } = orderData;
  const orderId = uuidv4();
  const [newproduct] = await connection.execute(query.InsertOrder, [orderId, clientId, sellerId]);
  if (newproduct) {

    const productsIdString = productsId.map((product) => (
      [orderId, product.produtId, product.quantity]
    ));
    console.log(productsIdString);

    await connection.query(
      'INSERT INTO ordersDatabase.order_details (orderId, productId, quantity) VALUES (?)',
      productsIdString
    )
    return orderId;
  }
  return false;
};


const listAll = async (): Promise<IOrder[]> => {
  const [allOrders] = await connection.query(query.findAllOrders);
  return allOrders as IOrder[];
}

// buscar pelo Id retorna os detalhes do pedido
const listById = async (id: string): Promise<IOrder> => {
  const [[order]] = await connection.execute<RowDataPacket[]>(query.findOrderById, [id]);
  return order as IOrder;
}



const deleteOrder = async (id: string) => {
  await connection.execute(query.deleteOrder, [id]);
  return connection.execute(query.deleteOrderDetails, [id])

}

export default { create, listAll, listById, deleteOrder };
