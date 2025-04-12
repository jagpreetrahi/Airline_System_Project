const express = require('express');
const {CityController} = require('../../controller')
const {CityMiddleware} = require('../../middleware')
const router = express.Router();

// api/v1/city/ -> post
router.post('/',
       CityMiddleware.validateCreateCity,
       CityController.createCity
)

// api/v1/city/ -> Get
router.get('/' , CityController.getCities);

// api/v1/city/:id   -> Get
router.get('/:id' , CityController.getCity);


// api/v1/city/:id   -> Delete
router.delete('/:id' , CityController.destroyCity);


// api/v1/city/:id   -> Update
router.put('/:id' , CityController.updateCity);

module.exports = router;