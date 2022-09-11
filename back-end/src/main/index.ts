import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middlewares'
import routes from './routes/index'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(errorMiddleware)

export default app

// https://gist.github.com/akirattii/86e2eda8e110976cce144c991e9cada8

// https://www.tutsmake.com/upload-image-in-mysql-db-using-node-js-express-multer/