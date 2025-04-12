const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error')


const airplaneRepository = new AirplaneRepository();


async function createAirplane(data){
   try {
      const airplane = await airplaneRepository.create(data);
      return airplane;
   } catch (error) {
       
       if(error.name == 'SequelizeValidationError'){
        let explanation = [];
          error.errors.forEach(err => {
             explanation.push(err.message)
          });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST)
       }
       throw new AppError("Cannot create a new Airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplane(id){

    try {
         const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.name == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError("Cannot found the airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function  getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        console.log(airplanes);
        return airplanes;
    } catch (error) {
        
        throw new AppError("Cannot found all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function  destroyAirplane(data) {
    try {
        const airplane = await airplaneRepository.destroy(data);
        return airplane;
    } catch (error) {
        if(error.name == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError("Cannot delete the airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function  updateAirplane(data , id) {
    try {
        const airplane = await airplaneRepository.updated(data, id);
        return airplane;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            throw new AppError("The airplane is not present due to their validation", StatusCodes.NOT_FOUND);
        }
        
        throw new AppError("Cannot update the airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAirplanes,
    destroyAirplane,
    updateAirplane
}