import compression from 'compression'
import cors, { CorsOptions } from 'cors'
import express from 'express'
import helmet from 'helmet'
import config from './config'
import { APP_PATH } from './constants/path.enum'
import { defaultErrorHandler } from './middlewares/error.middleware'
import router from './routes'

const app = express()
const port = config?.app.port

const corsOptions: CorsOptions = {
  origin: '*',
  credentials: false // Không gửi thông tin xác thực
}
app.use(cors(corsOptions))
app.use(express.json())

app.use(helmet())
app.use(compression())

app.use(
  '/images',
  express.static(APP_PATH.FOLDER_IMAGES, {
    setHeaders: (res, path) => {
      res.set('Cross-Origin-Resource-Policy', 'cross-origin')
    }
  })
)

app.use('/', router)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
