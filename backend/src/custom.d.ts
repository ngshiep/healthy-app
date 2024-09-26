import 'express'
import { TokenPayload } from './models/requests/user.request'

declare module 'express' {
  interface Request {
    decoded_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
  }
}
