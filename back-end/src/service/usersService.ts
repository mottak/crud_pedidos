import userModel from '../models/usersModel';
import { INewUser, IUser } from '../interfaces'

const create = async (userData: INewUser): Promise<IUser | false> => {

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
