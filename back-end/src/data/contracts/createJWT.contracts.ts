import { User } from '$/domain/models'

export interface ICreateJwtContract {
  create(data: User): Promise<string>
}