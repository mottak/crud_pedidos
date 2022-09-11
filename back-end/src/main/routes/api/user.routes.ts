import { registerUserFactory } from '$/main/factories'
import { userSchema } from '$/main/validators'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.post('/register', async (req, res) => {
  const data = await userSchema.validateAsync(req.body)
  const result = await registerUserFactory().add(data)
  return res.status(201).json(result)
})

export default userRoutes