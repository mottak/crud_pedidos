import { Router } from 'express';

import userRoute from './usersRoute';
import loginRoute from './loginRoute'
import productsRoute from './productsRoute'
import errorMiddleware from '../middlewares/error'

const route = Router();

route.use('/user', userRoute);
route.use('/login', loginRoute);
route.use('/products', productsRoute)
route.use(errorMiddleware);


export default route;
