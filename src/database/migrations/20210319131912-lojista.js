'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('tb_lojista', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
      },
      cpf: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false, 
      },
      usuario: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      senha:{
        type: Sequelize.STRING(500),
        allowNull: false,

      }, 
      loja_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_loja',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false

      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
      

    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
