import { Router } from 'express';
import userController from '../controllers/usersController';
import auth from '../middlewares/loginAuth'

const loginRoutes = Router();


// login
loginRoutes.post('/', auth.loginAuth, userController.login);


export default loginRoutes