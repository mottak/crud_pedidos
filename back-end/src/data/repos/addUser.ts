import { NewUser, User } from '../../domain/models'

export interface IUserRepo {
  add(data: NewUser): Promise<void>
  findByEmail(email: User['email']): Promise<User>
}