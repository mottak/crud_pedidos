import { CustomError } from '$/data/errors'
import { User, UserLogin, UserWithPassword } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IUserRepo } from '../../../data/repos'
import { findUserByEmail, insertUser, login } from '../queries'

export class UserDAO implements IUserRepo {
  async add(data: UserWithPassword): Promise<void> {
    await mysqlHelper.client.query(insertUser, [data.id, data.name, data.email, data.password, data.role])
  }
  async findByEmail(email: string): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findUserByEmail, [email])
    return row as UserWithPassword
  }
  async findById(id: User['id']): Promise<User> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findUserByEmail, [id])
    if (!row) {
      throw new CustomError("There is no user with the given id", 'BadRequest')
    }
    return row as User
  }
  async userLogin({ email, password }: UserLogin): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(login, [email, password])
    return row as UserWithPassword
  }

}