const {AirplaneService} = require('../services')
const {StatusCodes} = require('http-status-codes')

async function createAirplane(req , res) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : 'airbus e320',
            capacity : 180
        })
        return res.status(StatusCodes.CREATED).json({
              success : true,
              message : "Successfully created a new airplane",
              data : airplane,
              error : {}

        })
    } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              success : false,
              data : {},
              message : "Something went wrong",
              error : error
         })
    }
}

module.exports = {
    createAirplane
}