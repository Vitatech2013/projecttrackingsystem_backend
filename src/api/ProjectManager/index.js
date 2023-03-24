import { Router } from 'express'

import {
  login,
  profile,
  viewEmployees,
  getEmps,
  addModule,
  viewModule,
  mdownload,
  getModule,
  updateModule,
  deleteModule,
  viewProjects,
  getProject,
  updateProjectStatus,
  pdownload,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/profile', profile)

router.get('/view', viewEmployees)

router.get('/getemps', getEmps)

router.post('/addmodule', addModule)

router.get('/viewmodule', viewModule)

router.get('/mdownload/:id', mdownload)

router.get('/getmodule/:id', getModule)

router.put('/updatemodule/:id', updateModule)

router.delete('/deletemodule/:id', deleteModule)

router.get('/viewprojects', viewProjects)

router.get('/viewprojects/:id', getProject)

router.put('/updatestatus/:id', updateProjectStatus)

router.get('/pdownload/:id', pdownload)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
