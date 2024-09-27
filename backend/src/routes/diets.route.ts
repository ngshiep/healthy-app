import { Router } from 'express'
import { getDietsController } from '~/controllers/diets.controller'
import { accessTokenValidator } from '~/middlewares/user.middleware'
import { wrapErrorAsync } from '~/utils/handlerError'

const dietsRouter = Router()

dietsRouter.get('/diets', accessTokenValidator, wrapErrorAsync(getDietsController))

export default dietsRouter
