import { Router } from 'express';

import userRoute from './usersRoute';

const route = Router();

route.use('/users', userRoute);


export default route;
