import { JwtPayload } from 'jsonwebtoken'

export interface TokenPayload extends JwtPayload {
  user_id: string
  exp: number
  iat: number
}
export interface LoginReqBody {
  email: string
  password: string
}

export interface LogoutReqBody {
  refreshToken: string
}
