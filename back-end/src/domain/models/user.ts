export type User = {
  id: string
  name: string
  email: string
  role: string
}

export type UserWithPassword = User & {
  password: string
}

export type NewUser = Omit<UserWithPassword, 'id'>

export type UserLogin = Omit<UserWithPassword, 'id' | 'name' | 'role'>