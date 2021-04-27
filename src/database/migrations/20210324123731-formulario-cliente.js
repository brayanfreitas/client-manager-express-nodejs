'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_cliente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true
      },
      nome_cliente:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cpf_cliente:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      sexo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      estado_civil_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_estado_civil',
          key: 'id'
        }
      },
      naturalidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nacionalidade_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_nacionalidade',
          key: 'id'    
        }
      },
      tipo_doc_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_tipo_doc',
          key: 'id'
        }
      },
      num_doc:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      org_emissor:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      data_emissao_doc:{
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      nome_mae:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      endereco_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_endereco',
          key: 'id'
        }
      },
      telefone_fixo:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      celular:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      email:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      ocupacao:{
        type: Sequelize.STRING(50),
        allowNull: true
      },
      endereco_profissional:{
        type: Sequelize.STRING(300),
        allowNull: true
      },
      telefone_profissional:{
        type: Sequelize.STRING(300),
        allowNull: true
      },
      salario:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      referencia_comercial: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      contato_ref_comercial:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      referencia_pessoal:{
        type: Sequelize.STRING(300),
        allowNull: true
      },
      contato_refpessoal:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      renda_familiar_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_renda_familiar',
          key: 'id'
        }
      },
      frequencia_compra_carne:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      onde_costuma_comprar:{
        type: Sequelize.STRING(30),
        allowNull: true
      },
      data_ultima_compra:{
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      loja_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_loja',
          key: 'id'
        }
      },
    })   
  },
 
   down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('tb_cliente');
   }
};
