import { Request } from 'express'
import { checkSchema } from 'express-validator'
import { JsonWebTokenError } from 'jsonwebtoken'
import { MESSAGES_USERS } from '~/constants/messages.user'
import { AuthFailureError } from '~/core/errors.response'
import { verifyToken } from '~/utils/jwt'
import { validate } from '~/utils/validation'

export const accessTokenValidator = validate(
  checkSchema(
    {
      Authorization: {
        notEmpty: {
          errorMessage: MESSAGES_USERS.ACCESS_TOKEN_IS_REQUIRED
        },
        custom: {
          options: async (value, { req }) => {
            const access_token = value.split(' ')[1] as string

            if (!access_token) {
              throw new AuthFailureError({
                message: MESSAGES_USERS.ACCESS_TOKEN_IS_REQUIRED,
                data: {}
              })
            }

            try {
              const decoded_authorization = await verifyToken({
                token: access_token,
                secretOrPublicKey: process.env.JWT_SECRET_ACCESS_TOKEN as string
              })

              ;(req as Request).decoded_authorization = decoded_authorization
            } catch (error) {
              throw new AuthFailureError({
                message: (error as JsonWebTokenError).message,
                data: {}
              })
            }
            return true
          }
        }
      }
    },
    ['headers']
  )
)
