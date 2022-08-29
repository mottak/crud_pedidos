export type productId = {
  produtId: string;
  quantity: number;
}

interface INewOrder {
  clientId: string;
  sellerId: string;
  productsId: Array<productId>;
}

export default INewOrder