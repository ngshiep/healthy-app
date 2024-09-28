import app from './app'
import HttpStatusCode from './constants/httpStatusCode.enum'
import StorageKeys from './constants/StorageKeys.enum'
import { urls } from './urls'

const configs = {
  url: urls,
  app,
  HttpStatusCode,
  StorageKeys
}

export default configs
