import { Router } from 'express';
import userController from '../controllers/usersController';
import auth from '../middlewares/userAuth';

const usersRoutes = Router();

// criar novo usuario
usersRoutes.post('/', auth.newUserAuth, userController.create);

// //  atualizar usuario
// usersRoutes.put('/user/:id', userController);

// // deletar usuario
// usersRoutes.delete('/user/:id', userController);

export default usersRoutes