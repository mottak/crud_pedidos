import { Authentication } from '$/domain/generics'
import { Address, NewUser } from '$/domain/models'
import { IUserCase } from '../../domain/cases'
import { IAuthTask, IUserTasks } from '../tasks'
import { IAddressTasks } from '../tasks/address.task'


export class UserCase implements IUserCase {

  constructor(
    readonly userTasks: IUserTasks,
    readonly userAuth: IAuthTask,
    readonly addressTasks: IAddressTasks
  ) { }

  async add(user: NewUser, address: Address): Promise<Authentication> {
    await this.userTasks.checkEmail(user.email)
    const newUser = await this.userTasks.add(user)
    const { id,
      name,
      email,
      role } = newUser
    await this.addressTasks.add(address)
    const token = await this.userAuth.auth({ id, name, email, role })
    return token

  }
  // login(data: UserLogin): Promise<Authentication>
}

