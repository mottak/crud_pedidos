import { productFactory } from '$/main/factories'
import { productSchema } from '$/main/validators/products.validator'
import { Router } from 'express'
import { idSchema } from '../../validators/uuid.validator'

const productRoutes = Router()

productRoutes.post('/products', async (req, res) => {
  const data = await productSchema.validateAsync(req.body)
  const result = await productFactory().add(req.headers.authorization, data)
  return res.status(201).json(result)
})

productRoutes.get('/products/:id', async (req, res) => {
  console.log(' rota----', req.params)
  const data = await idSchema.validateAsync(req.params)
  const result = await productFactory().readOne(req.headers.authorization, data.id)
  return res.status(200).json(result)
})

productRoutes.get('/products', async (req, res) => {
  const result = await productFactory().read(req.headers.authorization)
  return res.status(200).json(result)
})



export default productRoutes