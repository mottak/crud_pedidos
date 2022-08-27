import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';

const productSchema = Joi.object({
  clientId: Joi.string().min(10).required(),
  sellerId: Joi.string().min(10).required(),

});

const newOrderAuth = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = productSchema.validate(body);
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};


export default { newOrderAuth, };
