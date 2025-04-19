const  CrudRepository  = require('./crud_repository')
const {airport} = require('../models')

class AirportRepositories extends CrudRepository{

    constructor(){
        super(airport)
    }
}

module.exports = AirportRepositories;