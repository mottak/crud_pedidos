import { Router } from 'express';

import userRoute from './usersRoute';
import loginRoute from './loginRoute'

const route = Router();

route.use('/user', userRoute);
route.use('/login', loginRoute);


export default route;
