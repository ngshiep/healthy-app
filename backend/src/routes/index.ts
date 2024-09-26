import express from 'express'
import blogsRouter from './blog.route'
import usersRouter from './user.route'

const router = express.Router()

router.use('/v1/api/auth', usersRouter)
router.use('/v1/api', blogsRouter)

export default router
