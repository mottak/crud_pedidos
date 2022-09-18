import { NewUser, User, UserLogin, UserWithPassword } from '../../domain/models'

export interface IUserRepo {
  add(data: NewUser): Promise<void>
  findByEmail(email: User['email']): Promise<User>
  userLogin(data: UserLogin): Promise<UserWithPassword>
}