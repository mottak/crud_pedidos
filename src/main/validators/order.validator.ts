import Joi from 'joi'

export const orderSchema = Joi.object({
  // clientId: Joi.string().min(36).required(),
  sellerId: Joi.string().min(36).required(),
  productsInfos: Joi.array().items(
    Joi.object({
      productId: Joi.string().length(36).required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).required()
})

export const orderUpdateSchema = Joi.object({
  status: Joi.string().pattern(/^Pendente|Em andamento|Entregue/).messages({
    'string.pattern.base': "Status value must be Pendente or Em andamento or Entregue"
  }),

})

// "\"status\" with value \"entregue\" fails to match the required pattern: /^Pendente|Em andamento|Entregue/"
