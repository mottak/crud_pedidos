import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';
import tk from '../utils/token'

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
  role: Joi.string().valid('client', 'seller')
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



const tokenAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ status: 401, message: 'Missing authorization' });
  try {
    const token = tk.verifyToken(authorization);
    res.locals.token = token;
    next();

  } catch (err) {
    next({ status: 400, message: 'Invalid token' });
  }

}

export default { newUserAuth, tokenAuth };
