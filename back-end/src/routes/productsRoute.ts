import { Router } from 'express';
import productsController from '../controllers/productsController';
import authUser from '../middlewares/userAuth';
import authProduct from '../middlewares/productsAuth';

const productsRoutes = Router();

// criar novo produto - cria validação do quem no body
productsRoutes.post('/', authProduct.newProductAuth, productsController.create);

// lista todos os produtos
productsRoutes.get('/', productsController.listAll);

//  atualizar produto 
productsRoutes.put('/:id', authUser.tokenAuth, productsController.update);

// // deletar produto
productsRoutes.delete('/:id', authUser.tokenAuth, productsController.deleteProduct);

export default productsRoutes