const {ErrorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');


const validateFlightData = (req, res ,next) => {
  
    const flightNumber = req.body.flightNumber;
    const departureTime = req.body.departureTime;
    const arrivalAirportId = req.body.arrivalAirportId;
    const arrivalTime = req.body.arrivalTime;
    const destinationAirportId = req.body.destinationAirportId;
    const airplaneId = req.body.airplaneId;
    const price = req.body.price;
    const totalSeats = req.body.totalSeats;
   
    const message = "Something went wrong while creating a city";
    if(!flightNumber){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Flight Number  is not found in the details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!departureTime){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Departure Time is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!arrivalTime){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  " Arrival Time is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!destinationAirportId){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  " Destination Airport is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!arrivalAirportId){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  " Arrival Airport is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!airplaneId){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Airplane Id is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!price){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Price is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    if(!totalSeats){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Total Seat is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    
    next();
}

const validateUpdateFlight = (req, res , next) => {

    
    if(!req.body.noOfSeat){
        ErrorResponse.message = message;
        ErrorResponse.error = {explanation :  "Seat is not found in the information details"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    next();
}

module.exports = {
    validateFlightData,
    validateUpdateFlight
}