const express = require('express');
const router = express.Router();
const {createTrip, getTrips, getTripsByDate, getTripsByQuery, getTripsById} = require('../controllers/tripCtrl');

router.post('/', createTrip);
router.get('/trips', getTrips);
router.get('/:id', getTripsById);
router.get('/trip-query', getTripsByQuery);
router.get('/:date', getTripsByDate);




module.exports = router;
