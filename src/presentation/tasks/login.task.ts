import { UserLogin, UserWithPassword } from '../../domain/models'

export interface ILoginTasks {
  login(data: UserLogin): Promise<UserWithPassword>
}