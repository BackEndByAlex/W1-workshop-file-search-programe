import express from 'express'
import { fileController } from '../../../controller/file-controller.js'

const router = express.Router()

router.get('/file', fileController)

export default router