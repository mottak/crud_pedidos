import { AuthTask, UserTasks } from '$/data/tasks'
import { CreateUUID, JwtAdapter } from '$/infra/adapters'
import { UserDAO } from '$/infra/mysql/daos'
import { UserCase } from '$/presentation/cases/user.case'

export const registerUserFactory = () => {
  const addNewUserRepo = new UserDAO()
  const createUUID = new CreateUUID()
  const addNewUserTask = new UserTasks(addNewUserRepo, createUUID)
  const userJwtAuth = new JwtAdapter()
  const authTask = new AuthTask(userJwtAuth)
  const userCase = new UserCase(addNewUserTask, authTask)
  return userCase
}