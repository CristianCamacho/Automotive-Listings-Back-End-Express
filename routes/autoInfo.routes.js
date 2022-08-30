const express = require('express')
const router = express.Router()
const controlls = require('../controllers')

router.get('/get-years', controlls.autoInfo.getYears)
router.get('/get-makes', controlls.autoInfo.getMakes)
router.get('/get-models', controlls.autoInfo.getModels)
router.get('/get-options', controlls.autoInfo.getOptions)

module.exports = router