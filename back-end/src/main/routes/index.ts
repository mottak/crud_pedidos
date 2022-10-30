import { Router } from 'express'
import apiOrdersRoutes from './api/index'

const routes = Router()

routes.use('/pedidos', apiOrdersRoutes)

export default routes