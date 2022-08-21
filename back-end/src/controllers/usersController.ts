import { Request, Response } from 'express'
import userService from '../service/usersService';
import auth from '../utils/token'

const create = async (req: Request, res: Response): Promise<typeof res> => {
  const userData = req.body;
  const newUser = await userService.create(userData);
  if (typeof newUser === 'string') {
    return res.status(400).json({ message: newUser });
  }
  if (newUser) {
    const { id, name, email, role } = newUser
    const token = auth.createToken({ id, name, email, role })
    return res.status(201).json({ token });
  }
  return res.status(501).json({ message: 'Não conseguimos criar esse usuario' });
};


const login = async (req: Request, res: Response) => {
  const loginData = req.body;
  const login = await userService.login(loginData);
  if (typeof login === 'string') {
    return res.status(400).json({ message: login });
  }
  if (login) {
    const { role } = login;
    const token = auth.createToken(login)
    return res.status(200).json({ message: 'login realizado com sucesso', token, role });
  }
}

export default { create, login };
