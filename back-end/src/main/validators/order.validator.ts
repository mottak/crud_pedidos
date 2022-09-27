import Joi from 'joi'

export const orderSchema = Joi.object({
  clientId: Joi.string().min(36).required(),
  sellerId: Joi.string().min(36).required(),
  productsInfos: Joi.array().items(
    Joi.object({
      productId: Joi.string().length(36).required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).required()
})

