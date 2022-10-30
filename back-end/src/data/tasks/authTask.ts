import { Authentication } from '$/domain/generics'
import { User } from '$/domain/models'
import { IAuthTask } from '../../presentation/tasks'
import { IJwtContract } from '../contracts'

export class AuthTask implements IAuthTask {
  constructor(
    readonly createJwt: IJwtContract
  ) { }
  async verify(token: string): Promise<User> {

    const payload = await this.createJwt.verify(token)
    return payload as User
  }
  async auth(data: User): Promise<Authentication> {
    return {
      accessToken: await this.createJwt.create(data),
      expiresIn: 60
    }
  }
}