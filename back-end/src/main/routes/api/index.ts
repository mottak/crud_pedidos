import { Router } from 'express'
import productsRoutes from './products.routes'
import userRoutes from './user.routes'

const apiRoutes = Router()

apiRoutes.use('/', userRoutes, productsRoutes)

export default apiRoutes
