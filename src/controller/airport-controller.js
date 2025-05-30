const  {AirportService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {SuccessResponse , ErrorResponse} = require('../utils/common')



async function createAirport(req , res) {

    
    try {
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            cityId : req.body.cityId
        })
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
}

async function getAirport(req, res){
   
    try {
        
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
         ErrorResponse.error  = error;
         return res 
                 .status(error.statusCode)
                 .json(ErrorResponse)
    }
}

async function getAirports(req, res){
   
    try {
        
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
         ErrorResponse.error  = error;
         return res 
                 .status(error.statusCode)
                 .json(ErrorResponse)
    }
}

async function destroyAirport(req, res){
   
    try {
        
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
         ErrorResponse.error  = error;
         return res 
                 .status(error.statusCode)
                 .json(ErrorResponse)
    }
}

async function updateAirport(req, res){ 
   
    const airportData = req.body;
   
    try {
        
        const airport = await AirportService.updateAirport(airportData , req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
         ErrorResponse.error  = error;
         return res 
                 .status(error.statusCode)
                 .json(ErrorResponse)
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport
}