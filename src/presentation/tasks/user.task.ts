import { NewUser, User, UserWithPassword } from '../../domain/models'

export interface IUserTasks {
  add(data: NewUser): Promise<UserWithPassword>
  checkEmail(email: User['email']): Promise<void>
  // find(): Promise<User[]>
  // findOne(data: string): Promise<User>
}
