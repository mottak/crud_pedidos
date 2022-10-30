import { AuthTask } from '$/data/tasks'
import { LoginTask } from '$/data/tasks/loginTask'
import { JwtAdapter } from '$/infra/adapters'
import { UserDAO } from '$/infra/mySQL/daos/user.dao'
import { LoginCase } from '$/presentation/cases/login.case'

export const loginUserFactory = () => {
  const userRepo = new UserDAO()
  const loginTask = new LoginTask(userRepo)
  const userJwtAuth = new JwtAdapter()
  const authTask = new AuthTask(userJwtAuth)
  const loginCase = new LoginCase(loginTask, authTask)
  return loginCase
}