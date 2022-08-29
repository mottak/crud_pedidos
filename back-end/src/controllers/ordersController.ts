import { Request, Response } from 'express'
import orderService from '../service/ordersService';


const listAll = async (req: Request, res: Response) => {
  const allProducts = await orderService.listAll();
  return res.status(200).json(allProducts);
}

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const newOrder = await orderService.create(body);
  if (!newOrder) return res.status(501).json({ message: 'Não conseguimos criar esse pedido' });
  return res.status(201).json(newOrder);
}

// const update = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { body } = req;
//   const productExists = await orderService.listById(id);
//   if (!productExists) {
//     return res.status(400).json({ message: 'Não é possivel atualizar um produto que não existe' });
//   }
//   const updatedProduct = await orderService.update(id, body)
//   if (updatedProduct) return res.status(200).json(updatedProduct);
//   return res.status(501).json({ message: 'Não conseguimos atualizar esse produto' });
// }

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderExists = await orderService.listById(id);
  if (!orderExists) {
    return res.status(400).json({ message: 'Não é possivel deletar um produto que não existe' });
  }
  const deletedOrder = await orderService.deleteOrder(id)
  if (deletedOrder) return res.status(204).send()
  return res.status(501).json({ message: 'Não conseguimos deletar esse produto' });
}

export default { create, listAll, deleteProduct };
