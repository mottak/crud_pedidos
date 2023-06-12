import crypto from 'crypto'

const cryptoHelper = {
  async hash(plainText: string): Promise<string> {
    const salt = crypto.randomBytes(32).toString('hex')
    const hmac = crypto.createHmac('sha256', salt).update(plainText).digest('hex')
    return `${salt}.${hmac}`
  },

  async compare(plainText: string, cipherText: string): Promise<boolean> {
    const [salt, hmac] = cipherText.split('.')
    const comparator = crypto.createHmac('sha256', salt).update(plainText).digest('hex')
    return hmac === comparator
  }
}

export default cryptoHelper;