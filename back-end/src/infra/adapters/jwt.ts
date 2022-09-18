import { IJwtContract } from '$/data/contracts'
import { CustomError } from '$/data/errors'
import { User } from '$/domain/models'
import vars from '$/vars'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements IJwtContract {
  async verify(accessToken: string): Promise<User> {
    const payload = await jwt.verify(accessToken, vars.jwt.secret, (err, decode) => {
      if (err) {
        throw new CustomError('User needs authentication', 'UnautorizedError')
      }
      return decode
    })

    return payload as unknown as User
  }
  async create(data: User): Promise<string> {
    const token = await jwt.sign({ data }, vars.jwt.secret)
    return token
  }

}