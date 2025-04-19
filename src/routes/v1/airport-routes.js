
const {AirportController} = require('../../controller/index')
const {AirportMiddleware} = require('../../middleware')

const express = require('express')
const router = express.Router();

//   api/v1/airplane/ -> POST
router.post('/' ,
    AirportMiddleware.validateAirport,
    AirportController.createAirport);

//  api/v1/airplane/:id -> Get    
router.get('/:id',
     AirportController.getAirport)

//  api/v1/airplane/ -> Get       
router.get('/',
     AirportController.getAirports)

//  api/v1/airplane/:id -> DELETE       
router.delete('/:id',
    AirportController.destroyAirport)

// api/v1/airplane/:id -> Update
router.put('/:id' , AirportController.updateAirport)    

    

module.exports = router;