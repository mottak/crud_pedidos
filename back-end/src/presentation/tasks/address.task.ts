import { Address } from '$/domain/models'

export interface IAddressTasks {
  add(address: Address): Promise<void>
}