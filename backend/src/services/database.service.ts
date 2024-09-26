import { APP_PATH } from '~/constants/path.enum'
import { IUser } from '~/models/schemas/user.schema'
import { FileSevice } from './json.service'
import { IRefreshToken } from '~/models/schemas/token.schema'

class DatabaseService {
  get users(): FileSevice<IUser> {
    return new FileSevice<IUser>(APP_PATH.USER_DB)
  }

  get refreshTokens(): FileSevice<IRefreshToken> {
    return new FileSevice<IRefreshToken>(APP_PATH.TOKEN_DB)
  }
}

const databaseService = new DatabaseService()
export default databaseService
