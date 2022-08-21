import { Router } from 'express';
import productsController from '../controllers/productsController';
import auth from '../middlewares/userAuth';

const productsRoutes = Router();

// criar novo produto
productsRoutes.post('/', auth.tokenAuth, productsController.create);

// lista todos os produtos
productsRoutes.get('/', productsController.listAll);

//  atualizar produto 
productsRoutes.put('/:id', auth.tokenAuth, productsController.update);

// // deletar produto
productsRoutes.delete('/:id', auth.tokenAuth, productsController.deleteProduct);

export default productsRoutes