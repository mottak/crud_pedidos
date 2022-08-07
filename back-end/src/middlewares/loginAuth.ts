import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';

const loginSchema = Joi.object({

  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),

});

const loginAuth = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

export default { loginAuth };
