import { Authentication } from '../generics'
import { Address, NewUser } from '../models'

export interface IUserCase {
  add(user: NewUser, address: Address): Promise<Authentication>
  // checkEmail(data: User['email']): Promise<void>
}