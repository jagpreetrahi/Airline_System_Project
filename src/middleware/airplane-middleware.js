const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

const validateCreateAirplane =  (req , res , next) => {

    const modelNumber = req.body.modelNumber;
    const capacity = req.body.capacity;
    if(!modelNumber && !capacity){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error  = {explanation : "You are not providing the full details"}
        return  res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = {
    validateCreateAirplane
}