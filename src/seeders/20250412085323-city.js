'use strict';
const {Op} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('cities', [{
        name: 'Bengaluru',
        createdAt : new Date(),
        updatedAt: new Date
         
       },{
         name : 'Pune',
         createdAt : new Date(),
         updatedAt: new Date
       },{
        name : 'Delhi',
        createdAt : new Date(),
        updatedAt: new Date
       }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('cities', null, {[Op.or] : [{name : 'Bengaluru'} , {name : 'Delhi'}]});
  }
};
