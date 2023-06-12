import { addressFactory, orderFactory } from '$/main/factories'
import { addressSchema, orderSchema, orderUpdateSchema } from '$/main/validators'
import { idSchema } from '$/main/validators/uuid.validator'
import { Router } from 'express'

const orderRoutes = Router()

orderRoutes.post('/orders', async (req, res) => {
  if (req.body.address) {
    const dataAddress = await addressSchema.validateAsync(req.body.address)
    await addressFactory().add(dataAddress, req.headers.authorization)
  }
  const dataOrder = await orderSchema.validateAsync(req.body.order)
  const result = await orderFactory().add(req.headers.authorization, dataOrder)
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

orderRoutes.patch('/orders/:id', async (req, res) => {
  const { id } = await idSchema.validateAsync(req.params)
  const data = await orderUpdateSchema.validateAsync(req.body)
  const result = await orderFactory().update(req.headers.authorization, id, data.status)
  return res.status(200).json(result)
})

// orderRoutes.delete('/orders/:id', async (req, res) => {
//   const { id } = await idSchema.validateAsync(req.params)
//   const result = await orderFactory().delete(req.headers.authorization, id)
//   return res.status(200).json(result)
// })


export default orderRoutes