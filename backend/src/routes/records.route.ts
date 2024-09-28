import { Router } from 'express'
import { getRecordsController } from '~/controllers/records.controller'
import { accessTokenValidator } from '~/middlewares/user.middleware'
import { wrapErrorAsync } from '~/utils/handlerError'

const recordsRouter = Router()

recordsRouter.get('/records', accessTokenValidator, wrapErrorAsync(getRecordsController))

export default recordsRouter
