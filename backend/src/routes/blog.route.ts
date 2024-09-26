import { Router } from 'express'
import { getBlogsController } from '~/controllers/blog.controller'
import { wrapErrorAsync } from '~/utils/handlerError'

const blogsRouter = Router()

blogsRouter.get('/blogs', wrapErrorAsync(getBlogsController))

export default blogsRouter
