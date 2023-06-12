import { UserLogin, UserWithPassword } from '$/domain/models'
import { ILoginTasks } from '$/presentation/tasks'
import { CustomError } from '../errors'
import { ILoginRepo } from '../repos'

export class LoginTask implements ILoginTasks {
  constructor(
    readonly userRepo: ILoginRepo,
  ) {

  }

  async login(data: UserLogin): Promise<UserWithPassword> {
    const user = await this.userRepo.userLogin(data)
    if (!user) throw new CustomError('Invalid email or password', 'UnauthorizedError')
    return user
  }


}