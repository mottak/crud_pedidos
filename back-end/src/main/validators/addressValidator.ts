import { Address } from '$/domain/models'
import Joi from 'joi'


export const addressSchema = Joi.object<Address>({
  street: Joi.string().min(3).required(),
  number: Joi.string().required(),
  complement: Joi.string(),
  neighborhood: Joi.string().required(),
  city: Joi.string().required(),
  defaultAddress: Joi.boolean().required(),
})