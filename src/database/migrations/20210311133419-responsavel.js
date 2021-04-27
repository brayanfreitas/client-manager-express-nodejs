'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("tb_responsavel", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true,
      },
      nome_responsavel:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      telefone_responsavel:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email_responsavel:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      usuario_spc:{
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      senha_spc:{
        type: Sequelize.STRING(100),
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
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tb_responsavel');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
