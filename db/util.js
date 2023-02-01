const fs = require('fs')
const path = require('path')
const mysql = require('mysql2/promise')
require('dotenv').config()

const filePath = path.join(__dirname, 'migration.sql')

const connect = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_USER_PASSWORD,
  multipleStatements: true

})

const runSql = async () => {
  const sql = fs.readFileSync(filePath, 'utf8')
  await connect.query(sql)
  await connect.end()
}

module.exports = {
  runSql

}
