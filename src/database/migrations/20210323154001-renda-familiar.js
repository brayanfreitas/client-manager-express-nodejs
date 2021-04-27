'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_renda_familiar', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true
      },
      renda_familiar:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      }
    })
   },
 
   down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('tb_renda_familiar');
   }
};
