import { User, UserLogin, UserWithPassword } from '../../domain/models'

export interface ILoginRepo {
  findByEmail(email: User['email']): Promise<User>
  userLogin(data: UserLogin): Promise<UserWithPassword>
}