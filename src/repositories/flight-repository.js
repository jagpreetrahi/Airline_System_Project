const CrudRepository = require('./crud_repository')
const {flight} = require('../models')
const db = require("../models")
const {addRowLockOnFLight}  = require('./queries')

class FlightRepository extends CrudRepository{

    constructor(){
        super(flight)
    }

    async getAllFlights(filter){
        
        const response = await flight.findAll({
            where : filter
            // order : sort
        })
        if(!response){
            throw Error("Cannot find a flight")
        }
        return response;
    }

    async   updateSeat(flightId , noOfSeat, obtainSeat = true) {

      
        const transaction = await db.sequelize.transaction();
       
       
        
        try {
            // lock the row
            await db.sequelize.query(addRowLockOnFLight(flightId));

            // fetch the flight 
            const flightData = await flight.findByPk(flightId);
            
            if(+obtainSeat){
                 await flightData.decrement('totalSeats' , {by : noOfSeat});
            }
            else{
                await flightData.increment('totalSeats' , {by : noOfSeat});
            }

            await flightData.reload();
            await transaction.commit();
            return flightData;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
     
    }
}



module.exports = FlightRepository