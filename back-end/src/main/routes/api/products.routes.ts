import { productFactory } from '$/main/factories'
import { productSchema } from '$/main/validators/products.validator'
import { Router } from 'express'

const productRoutes = Router()

productRoutes.post('/products', async (req, res) => {
  const data = await productSchema.validateAsync(req.body)
  const result = await productFactory().add(req.headers.authorization, data)
  return res.status(201).json(result)
})



export default productRoutes