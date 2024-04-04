'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('organizador', { id: Sequelize.INTEGER });
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('organizador');
     
  }
};
