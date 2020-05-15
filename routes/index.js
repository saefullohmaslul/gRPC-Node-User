const { Router } = require('express')
const userController = require('../controllers/user.controller')

const router = Router()

router.get('/user/notes', userController.userNotes)

module.exports = router