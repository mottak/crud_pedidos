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

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const productExists = await productService.listById(id);
  if (!productExists) {
    return res.status(400).json({ message: 'Não é possivel atualizar um produto que não existe' });
  }
  const updatedProduct = await productService.update(id, body)
  if (updatedProduct) return res.status(200).json(updatedProduct);
  return res.status(501).json({ message: 'Não conseguimos atualizar esse produto' });
}

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productExists = await productService.listById(id);
  if (!productExists) {
    return res.status(400).json({ message: 'Não é possivel deletar um produto que não existe' });
  }
  const deletedProduct = await productService.deleteProduct(id)
  if (deletedProduct) return res.status(204).send()
  return res.status(501).json({ message: 'Não conseguimos deletar esse produto' });
}

export default { listAll, create, update, deleteProduct };
