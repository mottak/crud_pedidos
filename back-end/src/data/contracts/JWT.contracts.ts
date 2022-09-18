import { User } from '$/domain/models'

export interface IJwtContract {
  create(data: User): Promise<string>
  verify(data: string): Promise<User>
}