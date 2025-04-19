const {ErrorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');

const validateCreateCity = (req, res ,next) => {
  
    const name = req.body.name;
    const message = "Something went wrong while creating a city";
    if(!name){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "You are not providing the correct details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
  
    next();
}

module.exports = {
    validateCreateCity
}