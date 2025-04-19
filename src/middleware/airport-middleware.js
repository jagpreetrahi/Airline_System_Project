const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

const validateAirport =  (req, res, next) => {

    const name = req.body.name;
    const code = req.body.code;
    const cityId = req.body.cityId;

    if(!name && !code && !cityId){
        ErrorResponse.message = "Something went wrong while creating a airport"
        ErrorResponse.error = {explanation :  "You are not providing the correct details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateAirport
}