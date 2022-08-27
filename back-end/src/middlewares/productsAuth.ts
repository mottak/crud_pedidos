import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  quantity: Joi.number().integer().greater(0).required(),
  price: Joi.number().greater(0).required(),

});

const newProductAuth = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = productSchema.validate(body);
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};


export default { newProductAuth, };
