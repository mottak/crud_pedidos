import connection from '../database/connection';
import query from '../database/queries/users'
import { INewUser, ILogin } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { RowDataPacket } from 'mysql2';

const create = async (userData: INewUser): Promise<string | null> => {
  const {
    name, email, password, role,
  } = userData;
  const userId = uuidv4();
  const [newUser] = await connection.execute(query.InsertUser, [userId, name, email, password, role]);
  if (newUser) return userId;
  return newUser;
};

const findByEmail = async (userData: INewUser): Promise<RowDataPacket | undefined> => {
  const { email } = userData;
  const [[userId]] = await connection.execute<RowDataPacket[]>(query.findUserByEmail, [email]);
  return userId;
}
const login = async (loginData: ILogin): Promise<RowDataPacket | undefined> => {
  const { email, password } = loginData;
  const [[userId]] = await connection.execute<RowDataPacket[]>(query.login, [email, password]);
  return userId;
}

export default { create, findByEmail, login };
