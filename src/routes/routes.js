import { Router } from 'express'
import * as crtlHelp from '../controllers/help.controller.js'
import * as crtlKey from '../controllers/key.controllers.js'

const router = Router()

// Get
router.get('/', crtlHelp.welcomeRoute)
router.get('/api/keys', crtlKey.getKeys)

// Post
router.post('/api/new-key', crtlKey.createKey)

// Delete
router.delete('/api/delete/:key', crtlKey.deleteKey)

export default router
