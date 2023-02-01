import Joi from 'joi'

export const idSchema = Joi.object({
  id: Joi.string().length(36).required(),


})