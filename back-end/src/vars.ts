import { cwd, env } from 'process'
// import packageJson from '../package.json'
const vars = {
  api: {
    // name: packageJson.description,
    name: 'crud de pedidos',
    path: cwd(),
    port: Number(env.PORT) || 3001
  },
  mysql: {
    url: env.MYSQL_URL
  },
  jwt: {
    secret: env.SECRET || 'secret'
  }
}

export default vars