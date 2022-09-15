import { NextFunction, Request, Response } from 'express'

const errors: Record<string, number> = {
  UnautorizedError: 401,
  ConflitError: 409
}

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err
  console.log('middleware de erro', err)
  const status = errors[name]
  console.log('middleware de erro', status)
  if (status) return res.status(status).json({ message })
  res.sendStatus(500)
}