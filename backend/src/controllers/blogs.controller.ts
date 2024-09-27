import { Request, Response } from 'express'
import { OK } from '~/core/success.response'
import databaseService from '~/services/database.service'

export const getBlogsController = async (req: Request, res: Response) => {
  const blogs = await databaseService.blogs.find()
  new OK({ message: 'Get blogs successfully!', data: blogs }).send(res)
}
