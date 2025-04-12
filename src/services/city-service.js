const {StatusCodes} = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityrepo = new CityRepository();


async function createCity(data){
    try {
       const city = await cityrepo.create(data);
       return city;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
         let explanation = [];
           error.errors.forEach(err => {
              explanation.push(err.message)
           });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a same City" , StatusCodes.BAD_REQUEST);
    }
 }
 
 async function getCity(id){
 
     try {
          const city = await cityrepo.get(id);
         return city;
     } catch (error) {
         if(error.name == StatusCodes.NOT_FOUND){
             throw new AppError('The city you requested is not present', error.statusCode);
         }
         throw new AppError("Cannot found the city" , StatusCodes.INTERNAL_SERVER_ERROR);
     }
 
 }
 
 async function  getCities() {
     try {
         const cities = await cityrepo.getAll();
         
         return cities;
     } catch (error) {
         
         throw new AppError("Cannot found all the cities" , StatusCodes.INTERNAL_SERVER_ERROR)
     }
 }
 
 async function  destroyCity(data) {
     try {
         const city = await cityrepo.destroy(data);
         return city;
     } catch (error) {
        console.log(error.name);
         if(error.name == StatusCodes.NOT_FOUND){
             throw new AppError('The city you requested is not present', error.statusCode);
         }
         throw new AppError("Cannot delete the city" , StatusCodes.INTERNAL_SERVER_ERROR);
     }
 }
 
 async function  updateCity(data , id) {
     try {
         const airplane = await cityrepo.updated(data, id);
         return airplane;
     } catch (error) {
         
         if(error.name == 'SequelizeValidationError'){
             throw new AppError("The city is not present due to their validation", StatusCodes.NOT_FOUND);
         }
         
         throw new AppError("Cannot update the city" , StatusCodes.INTERNAL_SERVER_ERROR);
     }
 }
 
 module.exports = {
     createCity,
     getCities,
     getCity,
     destroyCity,
     updateCity
     
 }