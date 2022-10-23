import { orderFactory } from '$/main/factories'
import { orderSchema, orderUpdateSchema } from '$/main/validators'
import { idSchema } from '$/main/validators/uuid.validator'
import { Router } from 'express'

const orderRoutes = Router()

orderRoutes.post('/orders', async (req, res) => {
  const data = await orderSchema.validateAsync(req.body)
  const result = await orderFactory().add(req.headers.authorization, data)
  return res.status(201).json(result)
})

orderRoutes.get('/orders/:id', async (req, res) => {
  const { id } = await idSchema.validateAsync(req.params)
  const result = await orderFactory().readOne(req.headers.authorization, id)
  return res.status(200).json(result)
})
orderRoutes.get('/orders', async (req, res) => {
  const result = await orderFactory().read(req.headers.authorization)
  return res.status(200).json(result)
})

// eu deveria usar put ou patch? porque?
// testar
orderRoutes.put('/orders/:id', async (req, res) => {
  const { id } = await idSchema.validateAsync(req.params)
  const data = await orderUpdateSchema.validateAsync(req.body)
  const result = await orderFactory().update(req.headers.authorization, id, data)
  return res.status(200).json(result)
})

orderRoutes.delete('/orders/:id', async (req, res) => {
  const { id } = await idSchema.validateAsync(req.params)
  const result = await orderFactory().delete(req.headers.authorization, id)
  return res.status(200).json(result)
})

// verificar se existe no banco os ids do cliente e do vendedor
// verificar se existe o id dos produtos no banco
// fazer uma nova factory pra cada item desse?

export default orderRoutes