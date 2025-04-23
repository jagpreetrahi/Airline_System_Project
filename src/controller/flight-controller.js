const {FlightService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {SuccessResponse , ErrorResponse} = require('../utils/common/index');



async function createFlight(req , res) {

    try {
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            destinationAirportId : req.body.destinationAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            airplaneId : req.body.airplaneId,
            price : req.body.price,
            totalSeats : req.body.totalSeats // mention the available seat in the flight
        })
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

async function getAllFlight(req, res){
   
    try {
        console.log(req.query)
        const flight = await FlightService.getAllFlights(req.query);
        if(flight){
            SuccessResponse.data = flight;
            return res.status(StatusCodes.OK).json(SuccessResponse)
        }
        
    } catch (error) {
        
         ErrorResponse.error  = error;
         console.log(ErrorResponse)
         return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getFlight(req, res){
   
    try {
        
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse)
       
        
    } catch (error) {
        ErrorResponse.error  = error;
        return res.status(error.statusCode).json(ErrorResponse)
    }
}
async function updateFlight(req, res){

    console.log("Data is " , req.body);
   
    try {
        
        const flight = await FlightService.updateRemainingSeat({
            flightId : req.body.flightId,
            noOfSeat : req.body.noOfSeat,
            obtainSeat : req.body.obtainSeat
        });
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse)
       
        
    } catch (error) {
        ErrorResponse.error  = error;
        return res.status(error.statusCode).json(ErrorResponse)
    }
}





module.exports = {
    createFlight,
    getAllFlight,
    getFlight,
    updateFlight,
}