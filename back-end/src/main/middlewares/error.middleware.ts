import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const errors: Record<string, number> = {
  BadRequest: 400,
  UnautorizedError: 401,
  NotFound: 404,
  ConflitError: 409
}

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err
  console.log('middleware de erro', err)
  console.log('middleware de erro -name', name)
  const status = errors[name]
  console.log('middleware de erro', status)
  if (status) {
    return res.status(status).json({ message })
  }
  if (err instanceof Joi.ValidationError) {
    console.log('entrei no if do joi')
    return res.status(400).json({ message: err.message })
  }
  res.sendStatus(500)
}
