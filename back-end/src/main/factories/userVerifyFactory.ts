import { UserVerifyTasks } from '$/data/tasks/userVerify'
import { UserDAO } from '$/infra/mySQL/daos/user.dao'
import { UserVerifyCase } from '$/presentation/cases/userVerify.case'

export const verifyUserFactory = () => {
  const userRepo = new UserDAO()
  const userVerifyTask = new UserVerifyTasks(userRepo)
  const userVerify = new UserVerifyCase(userVerifyTask)
  return userVerify
}