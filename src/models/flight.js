'use strict';
const {
  Model 
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane, {
         foreignKey : 'airplaneId',
         onDelete : 'CASCADE'
      })
      this.belongsTo(models.airport, {
         foreignKey : 'destinationAirportId',
         onDelete : 'CASCADE'
      })
      this.belongsTo(models.airport, {
        foreignKey : 'arrivalAirportId',
        onDelete : 'CASCADE'
     })
    }
  }
  flight.init({
    flightNumber: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    arrivalTime: {
       type : DataTypes.DATE,
       allowNull : false,
       
    },
    departureTime:{
      type : DataTypes.DATE,
      allowNull : false,
      
   },
    destinationAirportId: {
      type : DataTypes.STRING,
      allowNull : false,
      
    },
    arrivalAirportId:{
      type : DataTypes.STRING,
      allowNull : false,
      
    },
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      
    },
    price: {
       type : DataTypes.INTEGER,
       allowNull : false,
       unique : true
    },
    totalSeat : {
       type : DataTypes.INTEGER,
       allowNull : false
    },
    boardingGate: {
       type : DataTypes.STRING,
       allowNull :false,
       unique : true
    }, 
   
  },{
    sequelize,
    modelName: 'flight',
  });
  return flight;
};