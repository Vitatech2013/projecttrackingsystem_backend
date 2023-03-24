import { Router } from 'express'

import {
  login,
  profile,
  viewEmployees,
  getEmps,
  viewProjects,
  getModules,
  addTask,
  viewTask,
  tdownload,
  getTask,
  updateTask,
  deleteTask,
  viewModules,
  getModule,
  updateModuleStatus,
  mdownload,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/profile', profile)

router.get('/view', viewEmployees)

router.get('/getemps', getEmps)

router.get('/viewprojects', viewProjects)

router.get('/getmodules', getModules)

router.post('/addtask', addTask)

router.get('/viewtask', viewTask)

router.get('/tdownload/:id', tdownload)

router.get('/gettask/:id', getTask)

router.put('/updatetask/:id', updateTask)

router.delete('/deletetask/:id', deleteTask)

router.get('/viewmodules', viewModules)

router.get('/viewmodules/:id', getModule)

router.put('/updatestatus/:id', updateModuleStatus)

router.get('/mdownload/:id', mdownload)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
