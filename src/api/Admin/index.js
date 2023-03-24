import { Router } from 'express'

import {
  login,
  count,
  getSuperiors,
  addEmployee,
  viewEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  addProject,
  viewProjects,
  download,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/login', login)

router.get('/count', count)

router.get('/superiors', getSuperiors)

router.post('/registration', addEmployee)

router.get('/view', viewEmployees)

router.get('/get/:id', getEmployee)

router.put('/update/:id', updateEmployee)

router.delete('/delete/:id', deleteEmployee)

router.post('/addproject', addProject)

router.get('/viewprojects', viewProjects)

router.get('/download/:id', download)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
