import { Router } from 'express'
import {
  addressRoutes, orderRoutes, productRoutes, userRoutes
} from './api'

const routes = Router()

routes.use('/pedidos',
  userRoutes,
  productRoutes,
  orderRoutes,
  addressRoutes)

export default routes