import { AuthTask, UserTasks } from '$/data/tasks'
import { AddressTask } from '$/data/tasks/addressTask'
import { AddressDAO } from '$/infra'
import { CreateUUID, JwtAdapter } from '$/infra/adapters'
import { UserDAO } from '$/infra/mySQL/daos/user.dao'
import { UserCase } from '$/presentation/cases/user.case'

export const registerUserFactory = () => {
  const addNewUserRepo = new UserDAO()
  const addressRepo = new AddressDAO()
  const createUUID = new CreateUUID()
  const addressTask = new AddressTask(addressRepo, createUUID)
  const addNewUserTask = new UserTasks(addNewUserRepo, createUUID, addressTask)
  const userJwtAuth = new JwtAdapter()
  const authTask = new AuthTask(userJwtAuth)
  const userCase = new UserCase(addNewUserTask, authTask, addressTask)
  return userCase
}