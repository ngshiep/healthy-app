import { Router } from 'express'
import { getBlogsController } from '~/controllers/blogs.controller'
import { wrapErrorAsync } from '~/utils/handlerError'

const blogsRouter = Router()

blogsRouter.get('/blogs', wrapErrorAsync(getBlogsController))

export default blogsRouter
