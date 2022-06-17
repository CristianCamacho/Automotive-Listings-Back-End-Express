const express = require('express')
const router = express.Router()
const controlls = require('../controllers')

router.get('/getYears', controlls.autoInfo.getYears)

module.exports = router