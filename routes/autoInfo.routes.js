const express = require('express')
const router = express.Router()
const controlls = require('../controllers')

router.get('/getYears', controlls.autoInfo.getYears)
router.get('/getMakes', controlls.autoInfo.getMakes)
router.get('/getModels', controlls.autoInfo.getModels)

module.exports = router