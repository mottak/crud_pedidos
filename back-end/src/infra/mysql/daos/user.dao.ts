import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IUserRepo } from '../../../data/repos'
import { UserWithPassword } from '../../../domain/models'
import { findUserByEmail, insertUser } from '../queries'

export class UserDAO implements IUserRepo {
  async add(data: UserWithPassword): Promise<void> {
    await mysqlHelper.client.query(insertUser, [data.id, data.name, data.email, data.password, data.role])
  }
  async findByEmail(email: string): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findUserByEmail, [email])
    return row as UserWithPassword
  }

}