import Joi from 'joi'

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().greater(0).required(),

})