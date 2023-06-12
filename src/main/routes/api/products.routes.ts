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
  const data = await idSchema.validateAsync(req.params)
  const result = await productFactory().readOne(data.id)
  return res.status(200).json(result)
})

productRoutes.get('/products', async (req, res) => {
  const result = await productFactory().read()
  return res.status(200).json(result)
})

productRoutes.put('/products/:id', async (req, res) => {
  const dataId = await idSchema.validateAsync(req.params)
  const dataBody = await productSchema.validateAsync(req.body)
  const result = await productFactory().update(req.headers.authorization, dataId.id, dataBody)
  return res.status(200).json(result)
})

productRoutes.delete('/products/:id', async (req, res) => {
  const dataId = await idSchema.validateAsync(req.params)
  await productFactory().delete(req.headers.authorization, dataId.id)
  return res.status(204).json({ message: 'deleted product' })
})



export default productRoutes