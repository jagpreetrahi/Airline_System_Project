'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.city , {
          foreignKey : 'cityId',
          
      })
      this.hasMany(models.flight, {
        foreignKey : 'destinationAirportId',
        onDelete : 'CASCADE'
     })
     this.hasMany(models.flight, {
       foreignKey : 'arrivalAirportId',
       onDelete : 'CASCADE'
    })
    }
  }
  airport.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
      
    code: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    cityId:  {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    address: {
      type : DataTypes.STRING,
    
    },
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};