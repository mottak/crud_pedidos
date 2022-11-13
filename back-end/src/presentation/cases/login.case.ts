import { LoginAutentication } from '$/domain/generics'
import { UserLogin } from '$/domain/models'
import { ILoginCase } from '../../domain/cases'
import { IAuthTask, ILoginTasks } from '../tasks'


export class LoginCase implements ILoginCase {

  constructor(
    readonly loginTasks: ILoginTasks,
    readonly userAuth: IAuthTask
  ) { }

  async login(data: UserLogin): Promise<LoginAutentication> {
    console.log('cheguei no back')
    const user = await this.loginTasks.login(data)
    const { id,
      name,
      email,
      role } = user
    const token = await this.userAuth.auth({ id, name, email, role })
    const result = { ...token, role }
    console.log('result', result)
    return result
  }
}

