import { NewUser, User, UserWithPassword } from '$/domain/models'
import { IUserTasks } from '$/presentation/tasks'
import { ICreateUUID } from '../contracts'
import { CustomError } from '../errors'
import { IUserRepo } from '../repos'

export class UserTasks implements IUserTasks {
  constructor(
    readonly userRepo: IUserRepo,
    readonly createUUIDContract: ICreateUUID,
  ) {

  }

  async add(userData: NewUser): Promise<UserWithPassword> {
    const userId = this.createUUIDContract.create()
    const newUser: UserWithPassword = {
      id: userId,
      ...userData
    }
    await this.userRepo.add(newUser)
    return newUser
  }
  async checkEmail(email: User['email']): Promise<void> {
    const userEmail = await this.userRepo.findByEmail(email)
    if (userEmail) throw new CustomError('"Email" is already in use', 'UnauthorizedError')
  }

}