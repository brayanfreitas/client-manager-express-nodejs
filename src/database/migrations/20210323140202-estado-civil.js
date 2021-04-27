'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_estado_civil', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true
      },
      estado_civil:{
        type: Sequelize.STRING(15),
        allowNull: false
      }
    })
   },
 
   down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('tb_estado_civil');
   }
};
