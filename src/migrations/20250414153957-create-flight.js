'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull : false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull : false,
        
      },
      destinationAirportId: {
        type: Sequelize.STRING,
        allowNull  : false,
        references : {
          model: 'airports',
          key : 'code'
        },
        onDelete : 'CASCADE'
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull : false,
        references : {
          model : 'airports',
          key : 'code'
        },
        onDelete : 'CASCADE'
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'airplanes',
          key : 'id'
        },
        onDelete : 'CASCADE'
      },
      price: {
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true
     },
     totalSeat : {
        type : Sequelize.INTEGER,
        allowNull : false
     },
     boardingGate: {
        type : Sequelize.STRING,
        allowNull :false,
        unique : true
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};