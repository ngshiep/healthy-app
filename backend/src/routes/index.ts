import express from 'express'
import blogsRouter from './blogs.route'
import usersRouter from './users.route'
import dietsRouter from './diets.route'
import recordsRouter from './records.route'

const router = express.Router()

router.use('/v1/api/auth', usersRouter)
router.use('/v1/api', blogsRouter)
router.use('/v1/api', dietsRouter)
router.use('/v1/api', recordsRouter)

export default router
