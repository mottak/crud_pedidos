import connection from '../database/connection';
import queryInsertUser from '../queries/users'
import { IUser } from '../interfaces.d.ts'
import { v4 as uuidv4 } from 'uuid'

const create = async (userData: IUser): Promise<string | null> => {
  const {
    name, email, password, role,
  } = userData;
  const userId = uuidv4();
  const [newUser] = await connection.execute(queryInsertUser, [userId, name, email, password, role]);
  if (newUser) return userId;
  return newUser;
};

export default { create };
