import { Request, Response } from 'express'
import userService from '../service/usersService';
import auth from '../utils/token'

const create = async (req: Request, res: Response): Promise<typeof res> => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  if (newUser) {
    const { id, name, email, role } = newUser
    const token = auth.createToken({ id, name, email, role })
    return res.status(201).json({ token });
  }
  return res.status(101).json({ message: 'Não conseguimos criar esse usuario' });
};

export default { create };
