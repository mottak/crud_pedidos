import { Authentication } from '$/domain/generics'
import { UserLogin } from '$/domain/models'
import { ILoginCase } from '../../domain/cases'
import { IAuthTask, ILoginTasks } from '../tasks'


export class LoginCase implements ILoginCase {

  constructor(
    readonly loginTasks: ILoginTasks,
    readonly userAuth: IAuthTask
  ) { }

  async login(data: UserLogin): Promise<Authentication> {

    const user = await this.loginTasks.login(data)
    const { id,
      name,
      email,
      role } = user
    const token = await this.userAuth.auth({ id, name, email, role })
    return token

  }
}

