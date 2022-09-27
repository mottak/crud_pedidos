import { AuthTask } from '$/data/tasks'
import { OrderTask } from '$/data/tasks/orderTask'
import { CreateUUID, JwtAdapter } from '$/infra'
import { OrderDAO } from '$/infra/mySQL/daos/orders.daos'
import { OrderCase } from '$/presentation/cases/order.case'


export const orderFactory = () => {
  const orderRepo = new OrderDAO()
  const createUUID = new CreateUUID()
  const orderTask = new OrderTask(orderRepo, createUUID)
  const userJwtAuth = new JwtAdapter()
  const userAuth = new AuthTask(userJwtAuth)
  const instance = new OrderCase(orderTask, userAuth)
  return instance
}