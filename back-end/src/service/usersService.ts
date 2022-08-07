import userModel from '../models/usersModel';
import { INewUser, IUser } from '../interfaces'

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



export default { create };
