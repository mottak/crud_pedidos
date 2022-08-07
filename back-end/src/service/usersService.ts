import userModel from '../models/usersModel';
import { IUser } from '../interfaces.d.ts'

const create = async (userData: IUser): Promise<IUser | false> => {

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
