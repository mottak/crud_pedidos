import { Address } from '$/domain/models'
import { IAddressTasks } from '$/presentation/tasks/address.task'
import { ICreateUUID } from '../contracts'
import { IAddressRepo } from '../repos'

export class AddressTask implements IAddressTasks {
  constructor(
    readonly addressRepo: IAddressRepo,
    readonly createUUIDContract: ICreateUUID
  ) {

  }
  async add(address: Address): Promise<void> {
    const uuid = this.createUUIDContract.create()
    const completAddress = {
      id: uuid,
      ...address
    }
    await this.addressRepo.add(completAddress)
  }

}