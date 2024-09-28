import { Request, Response } from 'express'
import { NotFoundError } from '~/core/errors.response'
import { OK } from '~/core/success.response'
import { TokenPayload } from '~/models/requests/user.request'
import databaseService from '~/services/database.service'

export const getRecordsController = async (req: Request, res: Response) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const records = await databaseService.records.find()
  const foundRecords = records.find((r) => r.user_id === user_id)
  if (!foundRecords) new NotFoundError({ message: 'Not found records', data: {} }).send(res)
  new OK({ message: 'Get records successfully!', data: records[0] }).send(res)
}
