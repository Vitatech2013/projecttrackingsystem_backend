import { Router } from 'express'

import admin from './Admin'
import pm from './ProjectManager'
import tl from './TeamLeader'
import dev from './Developer'

const router = new Router()

router.use('/admin', admin)
router.use('/projectmanager', pm)
router.use('/teamleader', tl)
router.use('/developer', dev)

export default router