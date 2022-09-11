import { Authentication } from '$/domain/generics'
import { User } from '$/domain/models'
import { IAuthTask } from '../../presentation/tasks'
import { ICreateJwtContract } from '../contracts'

export class AuthTask implements IAuthTask {
  constructor(
    readonly createJwt: ICreateJwtContract
  ) { }
  async auth(data: User): Promise<Authentication> {
    return {
      accessToken: await this.createJwt.create(data),
      expiresIn: 60
    }
  }
}