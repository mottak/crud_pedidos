import Joi from 'joi'

export const productSchema = Joi.object({
  clientId: Joi.string().min(10).required(),
  sellerId: Joi.string().min(10).required(),

})
