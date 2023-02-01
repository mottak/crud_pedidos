import { AuthTask, ProductTask } from '$/data/tasks'
import { CreateUUID, JwtAdapter } from '$/infra'
import { ProductDAO } from '$/infra/mySQL/daos/products.dao'
import { ProductCase } from '$/presentation/cases/product.case'

export const productFactory = () => {
  const productRepo = new ProductDAO()
  const createUUID = new CreateUUID()
  const productTask = new ProductTask(productRepo, createUUID)
  const userJwtAuth = new JwtAdapter()
  const authTask = new AuthTask(userJwtAuth)
  const productCase = new ProductCase(productTask, authTask)
  return productCase
}