import { omit } from 'lodash'
import { MESSAGES_USERS } from '~/constants/messages.user'
import { signToken, verifyToken } from '~/utils/jwt'
import databaseService from './database.service'

class UsersService {
  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id
      },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,

      options: {
        algorithm: 'HS256',
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
      }
    })
  }
  private async signAccessAndRefreshToken(user_id: string) {
    return Promise.all([this.signAccessToken(user_id), this.signRefreshToken(user_id)])
  }
  private signRefreshToken(user_id: string, exp?: number) {
    if (exp) {
      return signToken({
        payload: {
          user_id,
          exp
        },
        privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string
      })
    }
    return signToken({
      payload: {
        user_id
      },
      privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string,
      options: {
        algorithm: 'HS256',
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
      }
    })
  }
  private decodeRefreshToken(refresh_token: string) {
    return verifyToken({
      token: refresh_token,
      secretOrPublicKey: process.env.JWT_SECRET_REFRESH_TOKEN as string
    })
  }
  async login(user_id: string) {
    const [access_token, refresh_token] = await this.signAccessAndRefreshToken(user_id)
    const { iat, exp } = await this.decodeRefreshToken(refresh_token)
    databaseService.refreshTokens.insertOne({ id: user_id, token: refresh_token, iat, exp })
    return { accessToken: access_token, refreshToken: refresh_token }
  }

  async logout(refresh_token: string) {
    await databaseService.refreshTokens.deleteOne((token) => token.token === refresh_token)
    return {
      message: MESSAGES_USERS.LOGOUT_SUCCESS
    }
  }
  async getMe(user_id: string) {
    const users = await databaseService.users.find()
    const user = users.find((u) => u.id === user_id)
    const omitUser = omit(user, ['password', 'id'])
    return omitUser
  }
}

const usersService = new UsersService()
export default usersService
