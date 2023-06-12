import { addressFactory } from '$/main/factories'
import { addressSchema } from '$/main/validators'
import { Router } from 'express'

const addressRoutes = Router()

addressRoutes.post('/address', async (req, res) => {

  const dataAddress = await addressSchema.validateAsync(req.body.address)
  const result = await addressFactory().add(dataAddress, req.headers.authorization)
  return res.status(201).json(result)
})


export default addressRoutes