const {Model, DataTypes } = require('sequelize');


class Socio extends Model {
    static init(sequelize){
        super.init(
            {
                nome_socio: {
                   type: DataTypes.STRING,
                    allowNull: false
                },
                cpf_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                telefone_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                endereco_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                bairro_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                cidade_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                estado_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
                complemento_socio: {
                    type: DataTypes.STRING,
                     allowNull: false
                 },
            },
            {
                sequelize,
                tableName: 'tb_socio'
            }
        );
    }
    static associate(models){
        Socio.hasOne(models.Empresa)
    }
}
module.exports = Socio;