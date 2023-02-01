import { ICreateUUID } from '$/data/contracts'
import crypto from 'crypto'

export class CreateUUID implements ICreateUUID {
  create(): string {
    const uuid = crypto.randomUUID()
    return uuid
  }
}