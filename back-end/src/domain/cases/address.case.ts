import { Message } from '../generics/message'
import { Address, User } from '../models'

export interface IAddressCase {
  add(address: Address, token: string, userId?: User['id']): Promise<Message>
  // remove(id: AddressWithId['id']): Promise<void>
}