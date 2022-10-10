const express = require('express')
const router = express.Router()
const controlls = require('../controllers')

router.post('/create-listing', controlls.listings.createListing)
router.get('/get-listing', controlls.listings.getListing)
router.get('/get-all-listings', controlls.listings.getAllListings)
router.post('/edit-listing', controlls.listings.editListing)
router.delete('/remove-listing', controlls.listings.removeListing)

module.exports = router