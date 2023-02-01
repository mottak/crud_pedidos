import { AuthTask } from '$/data/tasks'
import { AddressTask } from '$/data/tasks/addressTask'
import { CreateUUID, JwtAdapter } from '$/infra/adapters'
import { AddressDAO } from '$/infra/mySQL/daos'
import { AddressCase } from '$/presentation/cases'

export const addressFactory = () => {
  const addressRepo = new AddressDAO()
  const createUUID = new CreateUUID()
  const addressTask = new AddressTask(addressRepo, createUUID)
  const userJwtAuth = new JwtAdapter()
  const authTask = new AuthTask(userJwtAuth)
  const addressCase = new AddressCase(addressTask, authTask)
  return addressCase
}
