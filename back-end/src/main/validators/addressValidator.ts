import { Address } from '$/domain/models'
import Joi from 'joi'


export const addressSchema = Joi.object<Address>({
  userId: Joi.string().length(36).required(),
  street: Joi.string().min(3).required(),
  number: Joi.string().required(),
  complement: Joi.string().required(),
  neighborhood: Joi.string().required(),
  city: Joi.string().required(),
  defaultAddress: Joi.boolean().required(),
})