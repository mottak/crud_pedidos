export type Address = {
  userId: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  defaultAddress: boolean
}

export type AddressWithOutUserId = Omit<Address, 'userId'>

export type AddressWithId = Address & {
  id: string
}

