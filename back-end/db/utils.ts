import fs from 'fs'
import path from 'path'

// import { Pool } from 'mysql2/promise'
import { mysqlHelper } from '../src/infra/helper'

export default async function recreateDatabase() {
  try {
    const importPath = path.resolve(__dirname, 'migration.sql')
    const seedDBContent = fs.readFileSync(importPath).toString()
    const queries = seedDBContent.split(';').filter((p) => p.trim())
    console.log('queries linha 11 ----', queries)
    for (let i = 0; i < queries.length; i += 1) {
      const Query = queries[i]
      console.log('query linha 13 ----', Query)
      await mysqlHelper.client.query(Query)
    }
  } catch (error) {
    console.log('Banco Falha em restaurar o Banco', error)
  }
}

if (require.main === module) {

  recreateDatabase()
    .then(async () => {
      console.log('Banco Restaurado com sucesso')
      process.exit(0)
    })
}