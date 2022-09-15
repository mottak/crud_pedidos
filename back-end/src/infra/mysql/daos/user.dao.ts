import { UserLogin, UserWithPassword } from '$/domain/models'
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
  async userLogin({ email, password }: UserLogin): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(login, [email, password])
    return row as UserWithPassword
  }

}