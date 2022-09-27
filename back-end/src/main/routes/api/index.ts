import { Router } from 'express'
import orderRoutes from './orders.routes'
import productsRoutes from './products.routes'
import userRoutes from './user.routes'

const apiRoutes = Router()

apiRoutes.use('/', userRoutes, productsRoutes, orderRoutes)

export default apiRoutes
