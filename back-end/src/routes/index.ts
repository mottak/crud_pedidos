import { Router } from 'express';

import userRoute from './usersRoute';

const route = Router();

route.use('/user', userRoute);


export default route;
