import HTTP_STATUS from '~/constants/httpStatus.enum'
import { Response } from 'express'
import HTTP_PHRASE from '~/constants/httpPhrases'

interface SuccessResponseType<Data> {
  message: string
  success?: boolean
  data: Data
}

interface ResponseType<Data> {
  message: string
  success?: boolean
  data: Data
}

export class ResponseBase<Data> {
  message: string
  success: boolean
  data: Data
  constructor({ message, success = true, data }: ResponseType<Data>) {
    this.message = message || HTTP_PHRASE.OK
    this.success = success
    this.data = data
  }

  send(res: Response, header = {}) {
    return res.status(HTTP_STATUS.OK).json(this)
  }
}

export class SuccessResponse<Data> extends ResponseBase<Data> {
  constructor({ message, success = true, data }: SuccessResponseType<Data>) {
    super({ message, success, data })
  }
  send(res: Response, header = {}) {
    return res.status(HTTP_STATUS.OK).json(this)
  }
}

export class OK<Data> extends SuccessResponse<Data> {
  constructor({ message, success = true, data }: SuccessResponseType<Data>) {
    super({ message, success, data })
  }
  send(res: Response, header = {}) {
    return res.status(HTTP_STATUS.OK).json(this)
  }
}

export class CREATED<Data> extends SuccessResponse<Data> {
  constructor({ message, success = true, data }: SuccessResponseType<Data>) {
    super({ message, success, data })
  }
  send(res: Response, header = {}) {
    return res.status(HTTP_STATUS.CREATED).json(this)
  }
}
