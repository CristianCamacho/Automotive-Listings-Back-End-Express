const express = require('express')
const router = express.Router()
const controlls = require('../controllers')

router.post('/login', controlls.user.login)
router.get('/logout', controlls.user.logout)
router.post('/create-user', controlls.user.createUser)
module.exports = router