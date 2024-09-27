import { Router } from 'express'
import { getDietsController } from '~/controllers/diets.controller'
import { accessTokenValidator } from '~/middlewares/user.middleware'
import { wrapErrorAsync } from '~/utils/handlerError'

const recordsRouter = Router()

recordsRouter.get('/records', accessTokenValidator, wrapErrorAsync(getDietsController))

export default recordsRouter
