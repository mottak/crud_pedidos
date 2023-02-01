import { User } from '../models'

export type Authentication = {
  accessToken: string
  expiresIn: number
}

export type LoginAutentication = Authentication & { role: User['role'], name: User['name'] }

