const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

const validateAirport =  (req, res, next) => {

    const name = req.body.name;
    const code = req.body.code;
    const cityId = req.body.cityId;

    const message = "Something went wrong while creating a airport";

    if(!name){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Name not found in the information detail"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!code){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Code not found in the information detail"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!cityId){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "CityId not found in the information detail"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateAirport
}