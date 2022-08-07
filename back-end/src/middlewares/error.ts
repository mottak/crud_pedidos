import { ErrorRequestHandler } from 'express';

const middlewareError: ErrorRequestHandler = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'deu ruim' });
};

export default middlewareError;