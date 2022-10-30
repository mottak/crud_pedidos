import { Authentication } from '$/domain/generics'
import { NewUser } from '$/domain/models'
import { IUserCase } from '../../domain/cases'
import { IAuthTask, IUserTasks } from '../tasks'


export class UserCase implements IUserCase {

  constructor(
    readonly userTasks: IUserTasks,
    readonly userAuth: IAuthTask
  ) { }

  async add(data: NewUser): Promise<Authentication> {
    await this.userTasks.checkEmail(data.email)
    const newUser = await this.userTasks.add(data)
    const { id,
      name,
      email,
      role } = newUser
    const token = await this.userAuth.auth({ id, name, email, role })
    return token

  }
  // login(data: UserLogin): Promise<Authentication>
}

