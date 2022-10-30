import { User } from '../models'

export interface IUserVerifyCase {
  findOne(id: User['id']): Promise<void>
}