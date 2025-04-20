'use strict';



/** @type {import('sequelize-cli').Migration} */
const {EnumData}  = require('../utils/common')
const {BUSINESS , ECONOMY , FIRST_CLASS , PREMIUM_ECONOMY}  = EnumData.Seat_types
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Seats', [{
      airplaneId : 15,
      row : 1,
      col : 'A',
      class_type : BUSINESS,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 1,
      col : 'B',
      class_type : FIRST_CLASS,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 1,
      col : 'C',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
      
    },
    {
      airplaneId : 15,
      row : 1,
      col : 'D',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
      
    },
    {
      airplaneId : 15,
      row : 1,
      col : 'E',
      class_type : PREMIUM_ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 1,
      col : 'F',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
      
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'A',
      class_type : BUSINESS,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'B',
      class_type : PREMIUM_ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'C',
      class_type : FIRST_CLASS,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'D',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
      
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'E',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId : 15,
      row : 2,
      col : 'F',
      class_type : ECONOMY,
      createdAt : new Date(),
      updatedAt: new Date()
      
    },], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
