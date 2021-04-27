'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_socio',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
      },
      nome_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cpf_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      telefone_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      endereco_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      bairro_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cidade_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      }, 
      estado_socio:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      complemento_socio:{
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
      await queryInterface.dropTable('tb_socio');     
  }
};
