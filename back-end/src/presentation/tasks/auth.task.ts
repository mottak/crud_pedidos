import { Authentication } from '$/domain/generics'
import { User } from '$/domain/models'

export interface IAuthTask {
  auth(data: User): Promise<Authentication>
  verify(data: string): Promise<User>

}