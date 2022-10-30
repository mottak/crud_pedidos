import { User } from '../../domain/models'

export interface IUserVerifyTasks {

  findOne(id: string): Promise<User>
}
