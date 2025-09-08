import express from 'express'

import indexRender from './api/v1/index-routes.js'

const router = express.Router()

router.get('/', indexRender)

export default router