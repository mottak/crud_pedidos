import { Request, Response } from 'express'
import userService from '../service/usersService';

const create = async (req: Request, res: Response): Promise<typeof res> => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  if (newUser) return res.status(201).json(newUser);
  return res.status(101).json({ message: 'Não conseguimos criar esse usuario' });
};

export default { create };
