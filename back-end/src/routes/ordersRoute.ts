import { Router } from 'express';
import orderController from '../controllers/ordersController';
import authUser from '../middlewares/userAuth';
import authProduct from '../middlewares/productsAuth';
import authOrder from '../middlewares/ordersAuth'

const orderRoutes = Router();

// criar novo pedido - cria validação do quem no body
orderRoutes.post('/', orderController.create);

// lista todos os pedidos
orderRoutes.get('/', orderController.listAll);

// //  atualizar pedido 
// orderRoutes.put('/:id', authUser.tokenAuth, orderController.update);

// // // deletar pedido
// orderRoutes.delete('/:id', authUser.tokenAuth, orderController.deleteProduct);

export default orderRoutes