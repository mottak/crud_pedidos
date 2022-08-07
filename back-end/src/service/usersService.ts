import userModel from '../models/usersModel';
import { INewUser, IUser, ILogin, IPayload } from '../interfaces'

const create = async (userData: INewUser): Promise<IUser | false | string> => {

  const userExists = await userModel.findByEmail(userData)

  if (userExists) {
    return 'Não é possivel criar um usuario que ja existe'
  }

  const newUser = await userModel.create(userData);
  if (newUser) {

    return {
      id: newUser,
      ...userData
    };
  }
  return false;
};

const login = async (loginData: ILogin): Promise<IPayload | string> => {
  const validLogin = await userModel.login(loginData);
  if (validLogin) {
    return validLogin as IPayload;
  }
  return 'Email ou senha inválidos'
}


export default { create, login };
