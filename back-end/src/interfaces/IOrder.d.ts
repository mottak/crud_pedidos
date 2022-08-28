import { productId } from './INewOrder'

interface IOrder {
  id: string;
  clientId: string;
  sellerId: string;
  productsId: Array<productId>;
  date?: string;
}

export default IOrder