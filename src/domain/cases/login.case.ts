import { Authentication } from '../generics'
import { UserLogin } from '../models'

export interface ILoginCase {
  login(data: UserLogin): Promise<Authentication>
}