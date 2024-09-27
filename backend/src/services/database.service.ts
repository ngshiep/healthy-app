import { APP_PATH } from '~/constants/path.enum'
import { IBlog } from '~/models/requests/blog.schema'
import { IUserDiets } from '~/models/schemas/diets.schema'
import { IUserRecords } from '~/models/schemas/records.schema'
import { IRefreshToken } from '~/models/schemas/token.schema'
import { IUser } from '~/models/schemas/user.schema'
import { FileSevice } from './json.service'

class DatabaseService {
  get users(): FileSevice<IUser> {
    return new FileSevice<IUser>(APP_PATH.USER_DB)
  }

  get refreshTokens(): FileSevice<IRefreshToken> {
    return new FileSevice<IRefreshToken>(APP_PATH.TOKEN_DB)
  }

  get blogs(): FileSevice<IBlog> {
    return new FileSevice<IBlog>(APP_PATH.BLOG_DB)
  }

  get records(): FileSevice<IUserRecords> {
    return new FileSevice<IUserRecords>(APP_PATH.RECORD_DB)
  }

  get diets(): FileSevice<IUserDiets> {
    return new FileSevice<IUserDiets>(APP_PATH.DIETS_DB)
  }
}

const databaseService = new DatabaseService()
export default databaseService
