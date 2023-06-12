import { Authentication } from '../generics'
import { NewUser } from '../models'

export interface IUserCase {
  add(user: NewUser): Promise<Authentication>
  // checkEmail(data: User['email']): Promise<void>
}