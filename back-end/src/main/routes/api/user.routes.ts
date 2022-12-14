import { addressFactory, loginUserFactory, registerUserFactory } from '$/main/factories'
import { addressSchema, loginSchema, userSchema } from '$/main/validators'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.post('/user', async (req, res) => {
  const dataUser = await userSchema.validateAsync(req.body.user)
  const resultUserRegister = await registerUserFactory().add(dataUser)

  if (req.body.address) {
    const dataAddress = await addressSchema.validateAsync(req.body.address)
    await addressFactory().add(dataAddress, resultUserRegister.accessToken)
  }
  return res.status(201).json(resultUserRegister)
})

userRoutes.post('/login', async (req, res) => {
  const data = await loginSchema.validateAsync(req.body)
  const result = await loginUserFactory().login(data)
  return res.status(200).json(result)
})

export default userRoutes