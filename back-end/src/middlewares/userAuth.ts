import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
  role: Joi.string().valid('client', 'seller', 'admin')
    .required(),
});

const newUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = userSchema.validate(body);
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

export default { newUserAuth };
