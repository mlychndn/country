const express = require('express');
const countryController = require('../controllers/countryController');

const router = express.Router();

router.route('/')
.get(countryController.getCountries)
.post(countryController.createCountry)

router.route('/:id')
.get(countryController.geCountry);


module.exports = router;