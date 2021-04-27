'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('tb_tipo_doc', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       allowNull: false, 
       autoIncrement: true
     },
     doc:{
       type: Sequelize.STRING(30),
       allowNull: false
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('tb_estado_civil');
  }
};
