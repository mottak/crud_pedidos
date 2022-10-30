import { loginUserFactory, registerUserFactory } from '$/main/factories'
import { addressSchema, loginSchema, userSchema } from '$/main/validators'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.post('/register', async (req, res) => {
  const dataUser = await userSchema.validateAsync(req.body.user)
  const dataAddress = await addressSchema.validateAsync(req.body.address)
  const result = await registerUserFactory().add(dataUser, dataAddress)
  return res.status(201).json(result)
})

userRoutes.post('/login', async (req, res) => {
  const data = await loginSchema.validateAsync(req.body)
  const result = await loginUserFactory().login(data)
  return res.status(200).json(result)
})

export default userRoutes