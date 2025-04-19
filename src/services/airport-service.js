const AirportRepositories = require('../repositories/airport-repositories')
const {StatusCodes} = require('http-status-codes')
const AppError = require('../utils/errors/app-error')


const airportRepository = new AirportRepositories();


async function createAirport(data){
   try {
      const airport = await airportRepository.create(data);
      return airport;
   } catch (error) {
       
       if(error.name == 'SequelizeValidationError'){
        let explanation = [];
          error.errors.forEach(err => {
             explanation.push(err.message)
          });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST)
       }
       throw new AppError("Cannot create a new Airport" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirport(id){

    try {
         const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.name == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError("Cannot found the airport" , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function  getAirports() {
    try {
        const response = await airportRepository.getAll();
       
        return response;
    } catch (error){
        
        throw new AppError("Cannot found all the airports" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  destroyAirport(data) {
    try {
        const airport = await airportRepository.destroy(data);
        return airport;
    } catch (error) {
        if(error.name == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError("Cannot delete the airport" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function  updateAirport(data , id) {
    console.log("Data is " , data);
    console.log("Id is " , id)
    try {
        const airport = await airportRepository.updated(data, id);
        return airport
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            throw new AppError("The airport is not present due to their validation", StatusCodes.NOT_FOUND);
        }
        
        throw new AppError("Cannot update the airport" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport
}