import { NextFunction, Request, Response } from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import HTTP_STATUS from '~/constants/httpStatus.enum'
import { EntityError, ErrorBase, ErrorsType } from '~/core/errors.response'

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req)

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    const errorsObject = errors.mapped()
    const entityError = new EntityError<ErrorsType>({ data: {} })

    for (const key in errorsObject) {
      const { msg } = errorsObject[key]
      if (msg instanceof ErrorBase && msg?.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      } else {
        entityError.data[key] = errorsObject[key].msg.message || errorsObject[key].msg
      }
    }
    next(entityError)
  }
}
