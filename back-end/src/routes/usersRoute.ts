import { Router } from 'express';
import userController from '../controllers/usersController';
import auth from '../middlewares/userAuth';

const usersRoutes = Router();

// criar novo usuario
usersRoutes.post('/', auth.newUserAuth, userController.create);

// // buscar usuario pelo id
// usersRoutes.get('/user/:id', userController);

// // buscar todos usuarios
// usersRoutes.get('/user', userController);

// //  atualizar usuario
// usersRoutes.put('/user/:id', userController);

// // deletar usuario
// usersRoutes.delete('/user/:id', userController);

// login
// usersRoutes.post('/login', userController);

export default usersRoutes