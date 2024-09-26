import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { MESSAGES_USERS } from '~/constants/messages.user'
import { NotFoundError } from '~/core/errors.response'
import { OK } from '~/core/success.response'
import { LoginReqBody, LogoutReqBody, TokenPayload } from '~/models/requests/user.request'
import databaseService from '~/services/database.service'
import usersService from '~/services/users.service'

export const loginController = async (req: Request<ParamsDictionary, any, LoginReqBody>, res: Response) => {
  const userRequest = req.body
  const foundUser = (await databaseService.users.readData()).find(
    (u) => u.email === userRequest.email && u.password === userRequest.password
  )

  if (!foundUser) {
    throw new NotFoundError({
      message: MESSAGES_USERS.EMAIL_OR_PASSWORD_IS_INCORRECT,
      data: {}
    })
  }
  const result = await usersService.login(foundUser.id.toString())
  new OK({ message: MESSAGES_USERS.LOGIN_SUCCESS, data: result }).send(res)
}

export const logoutController = async (req: Request<ParamsDictionary, any, LogoutReqBody>, res: Response) => {
  const { refreshToken } = req.body
  const message = await usersService.logout(refreshToken)
  new OK({ message: message.message, data: {} }).send(res)
}

export const getUserInfoController = async (req: Request<ParamsDictionary, any>, res: Response) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const user = await usersService.getMe(user_id)
  new OK({ message: 'Get user info success', data: user }).send(res)
}
