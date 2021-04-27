'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_loja",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_loja:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      cnpj_loja:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      empresa_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_empresa',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      }

    })
  }, 

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_loja")
  }
};
