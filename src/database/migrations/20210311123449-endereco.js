'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('tb_endereco', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false, 
      autoIncrement: true,
    },
    cep:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    rua:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    numero:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    bairro:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    cidade:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    estado:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
    complemento:{
      type: Sequelize.STRING(350),
      allowNull: true,
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at:{
      type: Sequelize.DATE,
      allowNull: false,
    },
   })
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('tb_endereco');
     
  }
};
