import { Address, AddressWithId, User } from '$/domain/models'

export interface IAddressTasks {
  add(address: Address): Promise<void>,
  findByClientId(id: User['id']): Promise<AddressWithId>
}