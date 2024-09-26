import compression from 'compression'
import cors, { CorsOptions } from 'cors'
import express from 'express'
import helmet from 'helmet'
import config from './config'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import { APP_PATH } from './constants/path.enum'

const app = express()
const port = config?.app.port

const corsOptions: CorsOptions = {
  origin: '*'
}
//Midlle ware này giúp server có thể đọc được json
app.use(cors(corsOptions))
app.use(express.json())

//other package
app.use(helmet())
app.use(compression())

app.use('/images', express.static(APP_PATH.FOLDER_IMAGES))

//app.use('/', router)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
