// routes/stateDistrictRoutes.js
const express = require('express');
const router = express.Router();
const  getStateDistricts  = require('../controllers/getStateDistrictsCtrl');

router.get('/cities', getStateDistricts);

module.exports = router;
