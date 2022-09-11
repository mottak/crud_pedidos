import { NewUser } from '$/domain/models'
import Joi from 'joi'


export const userSchema = Joi.object<NewUser>({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
  role: Joi.string().valid('client', 'seller')
    .required(),
})