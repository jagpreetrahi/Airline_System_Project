const {FlightRepository} = require('../repositories')
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const ValidateDateTime = require('../utils/helpers/date-time-helper')
const {Op} = require('sequelize');

const flightRepo = new FlightRepository();

async function createFlight(data){
 
    
    const response = ValidateDateTime(data.departureTime , data.arrivalTime)
    if(!response){
        throw new AppError("Departure time should be less than Arrival Time", StatusCodes.BAD_REQUEST)
    }
    
    try {
        const response = await flightRepo.create(data);
        return response;
    } catch (error) {
        
            if(error.name == 'SequelizeValidationError'){
                let explanation = [];
                error.errors.forEach(err => {
                    explanation.push(err.message)
                });
                throw new AppError(explanation , StatusCodes.BAD_REQUEST)
            }
            
            
            throw new AppError("Cannot create a Flight" , StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

async function  getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
   

    if(query.trips){
        
        let [destinationAirportId , arrivalAirportId] = query.trips.split("-")
        if(destinationAirportId == arrivalAirportId){
            return customFilter;
        }
        customFilter.destinationAirportId = destinationAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
       
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }

    if(query.price){
        [minPrice , maxPrice] = query.price.split("-");
        customFilter.price = {
           [Op.between] : [minPrice , ((maxPrice == undefined) ? 20000 : maxPrice)]
        }
    }

    if(query.tripdate){
        const startDate = new Date(`${query.tripdate}T00:00:00Z`);
        const endDate = new Date(`${query.tripdate}T23:59:59Z`);
        customFilter.departureTime = {
            [Op.between] : [startDate, endDate]
        }
    }

    
    // for(const key in query){
    //     if(key.startsWith("sort.")){
    //         const params = query[key].split(",");
    //         const sortFilters = params.map((param) => param.split("_"))
    //         sortFilter = sortFilters
    //     }
    // }
    

    
    try {
        
        const response = await flightRepo.getAllFlights(customFilter);
        
        return response;
    } catch (error) {
       
        throw new AppError("Cannot found a  flight" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function  getFlight(id) {
    
    try {
        const flight = await flightRepo.get(id);
       return flight;
   } catch (error) {
       
       throw new AppError("Cannot found the flight" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function  updateRemainingSeat(data) {
    
    try {
        const updateFlightSeat = await flightRepo.updateSeat(data.flightId , data.noOfSeat , data.obtainSeat);
        console.log("Seat is on ",updateFlightSeat);
        return updateFlightSeat;
    } catch (error) {
        console.log(error)
        throw new AppError("Cannot update the flight" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateRemainingSeat
}
   


