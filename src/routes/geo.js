const express = require('express');
const router = express.Router();
const controller = require('../controllers/geoController');

router.post('/locations', controller.createLocation);
router.get('/locations/near', controller.getNearbyLocations);

module.exports = router;
