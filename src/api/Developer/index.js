import { Router } from 'express'

import {
  login,
  profile,
  viewTask,
  getTask,
  updateTaskStatus,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/profile', profile)

router.get('/viewtask', viewTask)

router.get('/viewtask/:id', getTask)

router.put('/updatestatus/:id', updateTaskStatus)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
