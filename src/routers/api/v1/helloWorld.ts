import { Router, Request, Response } from 'express'

import { hello } from '../../../controller'

const router: Router = Router()

router.route('/hello')
      .get(hello)

export default router