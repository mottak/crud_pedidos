import { Request, Response } from 'express'
import productService from '../service/productsService';


const listAll = async (req: Request, res: Response) => {
  const allProducts = await productService.listAll();
  return res.status(200).json(allProducts);
}

export default { listAll };
