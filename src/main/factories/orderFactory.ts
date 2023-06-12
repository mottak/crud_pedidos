import { AddressTask, AuthTask } from '$/data/tasks'
import { OrderTask } from '$/data/tasks/orderTask'
import { AddressDAO, CreateUUID, JwtAdapter } from '$/infra'
import { OrderDAO } from '$/infra/mySQL/daos/orders.daos'
import { OrderCase } from '$/presentation/cases/order.case'


export const orderFactory = () => {
  const orderRepo = new OrderDAO()
  const addressRepo = new AddressDAO()
  const createUUID = new CreateUUID()
  const addressTask = new AddressTask(addressRepo, createUUID)
  const orderTask = new OrderTask(orderRepo, createUUID)
  const userJwtAuth = new JwtAdapter()
  const userAuth = new AuthTask(userJwtAuth)
  const instance = new OrderCase(orderTask, userAuth, addressTask)
  return instance
}