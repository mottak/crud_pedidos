import { Router } from 'express';
import productsController from '../controllers/productsController';
import auth from '../middlewares/userAuth';

const productsRoutes = Router();

// criar novo produto - somente admin
productsRoutes.post('/', auth.tokenAuth, productsController.create);

// lista todos os produtos
productsRoutes.get('/', productsController.listAll);

// //  atualizar produto - somente admin
// productsRoutes.put('/:id', productsController);

// // deletar produto - somente admin
// productsRoutes.delete('/:id', productsController);

export default productsRoutes