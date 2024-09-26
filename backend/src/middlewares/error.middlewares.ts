import { Request, Response } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus.enum'
import { ErrorBase } from '~/core/errors.response'

// định tuyến error
export const defaultErrorHandler = (err: any, req: Request, res: Response, NextFunction: any) => {
  if (err instanceof ErrorBase) {
    return res.status(err?.status || 200).json(omit(err, ['status']))
  } else {
    // enumerable sẽ quyết định thuộc tính có hiện khi dùng JSON.stringify hay không.
    // mình cần đưa hết enumerable về true để ra được ra được thông tin của object
    Object.getOwnPropertyNames(err).forEach((key) => {
      Object.defineProperty(err, key, { enumerable: true })
    })
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      errorInfo: omit(err, ['stack'])
    })
  }
}
