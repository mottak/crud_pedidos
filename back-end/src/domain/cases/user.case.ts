import { Authentication } from '../generics'
import { AddressWithOutUserId, NewUser } from '../models'

export interface IUserCase {
  add(user: NewUser, address: AddressWithOutUserId): Promise<Authentication>
  // checkEmail(data: User['email']): Promise<void>
}