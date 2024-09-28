import { Request, Response } from 'express'
import { NotFoundError } from '~/core/errors.response'
import { OK } from '~/core/success.response'
import { TokenPayload } from '~/models/requests/user.request'
import databaseService from '~/services/database.service'

export const getDietsController = async (req: Request, res: Response) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const diets = await databaseService.diets.find()
  const foundDiets = diets.find((d) => d.user_id === user_id)
  if (!foundDiets) new NotFoundError({ message: 'Not found diets', data: {} }).send(res)
  new OK({ message: 'Get diets successfully!', data: foundDiets }).send(res)
}
