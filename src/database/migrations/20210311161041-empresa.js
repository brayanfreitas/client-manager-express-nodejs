'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_empresa',{
      id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
      },
      razao_social: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cnpj_empresa:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      nome_fantasia:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      inscricao_estadual:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      inscricao_municipal:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email_empresa:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      endereco_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_endereco',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      socio_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_socio',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      responsavel_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_responsavel',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false, 
      },
    
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_empresa');
  }
};
