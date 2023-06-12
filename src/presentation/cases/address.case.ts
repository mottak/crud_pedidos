import { CustomError } from '$/data/errors'
import { IAddressCase } from '$/domain/cases/address.case'
import { Message } from '$/domain/generics/message'
import { AddressWithOutUserId } from '$/domain/models'
import { IAuthTask } from '../tasks'
import { IAddressTasks } from '../tasks/address.task'


export class AddressCase implements IAddressCase {

  constructor(
    readonly addressTask: IAddressTasks,
    readonly userAuth: IAuthTask,
  ) { }

  async add(address: AddressWithOutUserId, token: string | undefined): Promise<Message> {

    if (!token) throw new CustomError('Please sign in', 'BadRequest')
    const payload = await this.userAuth.verify(token)
    if (!payload) throw new CustomError('Invalid token. Please login!', 'UnauthorizedError')
    const addressWithUserId = {
      userId: payload.id,
      ...address
    }
    await this.addressTask.add(addressWithUserId)
    return { message: 'New address register sucefully!' }
  }
}

