import { ICreateJwtContract } from '$/data/contracts'
import { User } from '$/domain/models'
import vars from '$/vars'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements ICreateJwtContract {
  async create(data: User): Promise<string> {
    const token = await jwt.sign({ data }, vars.jwt.secret)
    return token
  }

}