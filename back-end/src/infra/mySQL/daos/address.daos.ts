import { CustomError } from '$/data/errors'
import { AddressWithId, User } from '$/domain/models'
import { mysqlHelper } from '$/infra/helper'
import { RowDataPacket } from 'mysql2'
import { IAddressRepo } from '../../../data/repos'
import { findAddressByUserId, insertAddress } from '../queries'

export class AddressDAO implements IAddressRepo {
  async add(data: AddressWithId): Promise<void> {
    await mysqlHelper.client.query(insertAddress, [data.id, data.userId, data.street, data.number, data.complement, data.neighborhood, data.city, data.defaultAddress])
  }

  async findByUserId(id: User['id']): Promise<AddressWithId> {
    const [[row]] = await mysqlHelper.client.query<RowDataPacket[]>(findAddressByUserId, [id])
    if (!row) {
      throw new CustomError("There is no user address register with the given userId", 'BadRequest')
    }
    return row as AddressWithId
  }


}