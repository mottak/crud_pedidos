import connection from '../database/connection';
import query from '../database/queries/users'
import { INewUser } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

const create = async (userData: INewUser): Promise<string | null> => {
  const {
    name, email, password, role,
  } = userData;
  const userId = uuidv4();
  const [newUser] = await connection.execute(query.InsertUser, [userId, name, email, password, role]);
  if (newUser) return userId;
  return newUser;
};

export default { create };
