import { AddressWithOutUserId, NewUser, User, UserWithPassword } from '../../domain/models'

export interface IUserTasks {
  add(data: NewUser, addressData: AddressWithOutUserId): Promise<UserWithPassword>
  checkEmail(email: User['email']): Promise<void>
  // find(): Promise<User[]>
  // findOne(data: string): Promise<User>
}
