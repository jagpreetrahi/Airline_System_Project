
const {FlightController} = require('../../controller/index')
const {FLightMiddleware} = require('../../middleware')

const express = require('express')
const router = express.Router();

//   api/v1/flight/ -> POST
router.post('/' ,
    FLightMiddleware.validateFlightData,
    FlightController.createFlight
);

//api/v1/flight -> Get
router.get('/',
    FlightController.getAllFlight
)

// api/v1/flight/:id  -> Get
router.get('/:id',
    FlightController.getFlight
)

// api/v1/flight/seat/ -> Get
router.put('/seat',
    FLightMiddleware.validateUpdateFlight,
    FlightController.updateFlight
)

 
module.exports = router;