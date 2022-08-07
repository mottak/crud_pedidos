import jwt from 'jsonwebtoken'
import { IPayload } from '../interfaces'
import dotenv from 'dotenv'

dotenv.config();
const secret = (process.env.SECRET as string).toString()

const createToken = (payload: IPayload) => jwt.sign(payload, secret);

export default { createToken }