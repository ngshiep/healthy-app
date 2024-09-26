import { Router } from 'express'
import { getUserInfoController, loginController, logoutController } from '~/controllers/users.controller'
import { accessTokenValidator } from '~/middlewares/user.middleware'
import { wrapErrorAsync } from '~/utils/handlerError'

const usersRouter = Router()

usersRouter.post('/login', wrapErrorAsync(loginController))

usersRouter.post('/logout', accessTokenValidator, wrapErrorAsync(logoutController))

usersRouter.get('/info', accessTokenValidator, wrapErrorAsync(getUserInfoController))

export default usersRouter
