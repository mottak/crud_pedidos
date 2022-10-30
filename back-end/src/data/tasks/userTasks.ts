import { Address, AddressWithOutUserId, NewUser, User, UserWithPassword } from '$/domain/models'
import { IUserTasks } from '$/presentation/tasks'
import { IAddressTasks } from '$/presentation/tasks/address.task'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
import { IUserRepo } from '../repos'

export class UserTasks implements IUserTasks {
  constructor(
    readonly userRepo: IUserRepo,
    readonly createUUIDContract: ICreateUUID,
    readonly addressTask: IAddressTasks
  ) {

  }

  async add(userData: NewUser, addressData: AddressWithOutUserId): Promise<UserWithPassword> {
    const userId = this.createUUIDContract.create()
    const newUser: UserWithPassword = {
      id: userId,
      ...userData
    }
    const userAddress: Address = {
      userId,
      ...addressData
    }
    await this.userRepo.add(newUser)
    await this.addressTask.add(userAddress)
    return newUser
  }
  async checkEmail(email: User['email']): Promise<void> {
    const userEmail = await this.userRepo.findByEmail(email)
    if (userEmail) throw new CustomError('"Email" is already in use', 'UnautorizedError')
  }

}