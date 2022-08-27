interface IOrder {
  id: string;
  clientId: string;
  sellerId: string;
  productId: string;
  date?: string;
}

export default IOrder