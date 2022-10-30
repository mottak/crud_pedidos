import { AddressWithId, User } from '../../domain/models'

export interface IAddressRepo {
  add(data: AddressWithId): Promise<void>
  findByUserId(id: User['id']): Promise<AddressWithId>
}