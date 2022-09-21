import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const errors: Record<string, number> = {
  UnautorizedError: 401,
  BadRequest: 404,
  ConflitError: 409
}

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err
  console.log('middleware de erro', err)
  const status = errors[name]
  console.log('middleware de erro', status)
  if (status) {
    return res.status(status).json({ message })
  }
  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({ message: err.message })
  }
}
