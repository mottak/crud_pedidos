import { ILoginRepo } from '$/data/repos/login.repo'
import { UserLogin, UserWithPassword } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { findUserByEmail, login } from '../queries'

export class LoginDAO implements ILoginRepo {

  async findByEmail(email: string): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findUserByEmail, [email])
    return row as UserWithPassword
  }

  async userLogin({ email, password }: UserLogin): Promise<UserWithPassword> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(login, [email, password])
    return row as UserWithPassword
  }

}