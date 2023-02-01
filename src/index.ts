import { mysqlHelper } from '$/infra/helper'
import expressServer from '$/main'
import vars from './vars'

mysqlHelper.connect()
  .then(() => {
    expressServer.listen(vars.api.port, () => {
      console.log(`${vars.api.name} running on port ${vars.api.port}`)
    })
  }).catch((error) => {
    console.log(error)
    process.exit(1)
  })



