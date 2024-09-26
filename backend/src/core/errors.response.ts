import HTTP_PHRASE from '~/constants/httpPhrases'
import HTTP_STATUS from '~/constants/httpStatus.enum'
// import { MESSAGES_USERS } from '~/constants/messages.user'
import { ResponseBase } from './success.response'

export type ErrorsType = Record<
  string,
  {
    msg: string
    [key: string]: any
  }
>

interface ErrorBaseType<Data> {
  message?: string
  success?: boolean
  status?: number
  data: Data
}
//main error base
export class ErrorBase<Data> extends ResponseBase<Data> {
  status?: number
  constructor({
    message = HTTP_PHRASE.INTERNAL_SERVER_ERROR,
    success = false,
    data,
    status = HTTP_STATUS.UNPROCESSABLE_ENTITY
  }: ErrorBaseType<Data>) {
    super({ message, success, data })
    this.status = status
  }
}
export class EntityError<Data> extends ErrorBase<Data> {
  constructor({
    message = 'Validation error',
    status = HTTP_STATUS.UNPROCESSABLE_ENTITY,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class UnprocessableError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.UNPROCESSABLE_ENTITY,
    status = HTTP_STATUS.UNPROCESSABLE_ENTITY,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class ConflictRequestError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.CONFLICT,
    status = HTTP_STATUS.CONFLICT,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class BadRequestError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.FORBIDDEN,
    status = HTTP_STATUS.FORBIDDEN,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class AuthFailureError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.UNAUTHORIZED,
    status = HTTP_STATUS.UNAUTHORIZED,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class NotFoundError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.NOT_FOUND,
    status = HTTP_STATUS.NOT_FOUND,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class ForbiddenError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.FORBIDDEN,
    status = HTTP_STATUS.FORBIDDEN,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}

export class InternalServerError<Data> extends ErrorBase<Data> {
  constructor({
    message = HTTP_PHRASE.INTERNAL_SERVER_ERROR,
    status = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    success = false,
    data
  }: ErrorBaseType<Data>) {
    super({ message, success, data, status })
  }
}
