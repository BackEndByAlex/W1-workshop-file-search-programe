import express from 'express'
import { indexRender } from '../../../controller/index-controller.js'

const router = express.Router()

router.get('/', indexRender)

export default router