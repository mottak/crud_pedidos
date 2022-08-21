import { Request, Response } from 'express'
import productService from '../service/productsService';


const listAll = async (req: Request, res: Response) => {
  const allProducts = await productService.listAll();
  return res.status(200).json(allProducts);
}

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const newProduct = await productService.create(body);
  if (typeof newProduct === 'string') return res.status(400).json({ message: newProduct });
  if (!newProduct) return res.status(501).json({ message: 'Não conseguimos criar esse produto' });
  return res.status(201).json(newProduct);
}

export default { listAll, create };
