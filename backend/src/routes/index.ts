import express from 'express'
import usersRouter from './user.route'

const router = express.Router()

router.use('/v1/api/auth', usersRouter)

export default router
