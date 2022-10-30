import { IUserVerifyCase } from '$/domain/cases/userVerify.case'
import { IUserVerifyTasks } from '../tasks'


export class UserVerifyCase implements IUserVerifyCase {

  constructor(
    readonly userVerifyTasks: IUserVerifyTasks,
  ) { }

  async findOne(id: string): Promise<void> {
    await this.userVerifyTasks.findOne(id)
  }

}

