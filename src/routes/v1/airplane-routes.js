
const {AirplaneController} = require('../../controller/index')
const {AirplaneMiddleware} = require('../../middleware')

const express = require('express')
const router = express.Router();

//   api/v1/airplane/ -> POST
router.post('/' ,
    AirplaneMiddleware.validateCreateAirplane,
    AirplaneController.createAirplane);

//  api/v1/airplane/:id -> Get    
router.get('/:id',
     AirplaneController.getAirplane)

//  api/v1/airplane/ -> Get       
router.get('/',
     AirplaneController.getAirplanes)

//  api/v1/airplane/:id -> DELETE       
router.delete('/:id',
    AirplaneController.destroyAirplane)

// api/v1/airplane/:id -> Update
router.put('/:id' , AirplaneController.updateAirplane)    

    

module.exports = router;