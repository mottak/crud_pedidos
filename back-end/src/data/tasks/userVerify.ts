import { User } from '$/domain/models'
import { IUserVerifyTasks } from '$/presentation/tasks'
import { CustomError } from '../errors'
import { IUserRepo } from '../repos'

export class UserVerifyTasks implements IUserVerifyTasks {
  constructor(
    readonly userRepo: IUserRepo,
  ) {

  }
  async findOne(id: string): Promise<User> {
    const userExists = await this.userRepo.findById(id)
    if (!userExists) throw new CustomError('Please use a valid user', 'UnauthorizedError')
    return userExists
  }
}