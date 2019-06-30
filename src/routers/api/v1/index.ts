import { Router } from 'express'

import hello from './helloWorld'

const router: Router = Router()

router.use('/', hello)

export default router