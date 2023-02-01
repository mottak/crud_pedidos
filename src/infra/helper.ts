import vars from '$/vars'
import { createPool, Pool } from 'mysql2/promise'

export const mysqlHelper = {
  client: null as unknown as Pool,

  async connect(): Promise<void> {
    mysqlHelper.client = createPool({ uri: vars.mysql.url })
    await mysqlHelper.client.query('SELECT 1') // testar conexão com banco
  },
}