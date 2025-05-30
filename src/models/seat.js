'use strict';
const {
  Model
} = require('sequelize');
const {EnumData} = require('../utils/common');
const {BUSINESS , ECONOMY , PREMIUM_ECONOMY , FIRST_CLASS} = EnumData.Seat_types
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
         foreignKey : 'airplaneId',
         
      })
    }
  }
  Seat.init({
    row:  {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    col: {
      type : DataTypes.STRING,
      allowNull : false
    },
    class_type: {
      type : DataTypes.ENUM(BUSINESS, ECONOMY, PREMIUM_ECONOMY , FIRST_CLASS),
      allowNull : false,
      defaultValue : ECONOMY
    },
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};