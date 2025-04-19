const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

const validateCreateAirplane =  (req , res , next) => {

    const modelNumber = req.body.modelNumber;
    const capacity = req.body.capacity;
    const message = "Something went wrong while creating airplane"
    if(!modelNumber){
        ErrorResponse.message = message;
        ErrorResponse.error  = {explanation : "ModelNumber not found"}
        return  res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!capacity){
        ErrorResponse.message = message;
        ErrorResponse.error  = {explanation : "Capacity not found"}
        return  res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = {
    validateCreateAirplane
}