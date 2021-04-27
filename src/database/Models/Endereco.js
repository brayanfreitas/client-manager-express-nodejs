const {Model, DataTypes} = require("sequelize");

class Endereco extends Model {
    static init(sequelize){
        super.init(
            {
                cep: DataTypes.STRING(50),
                rua: DataTypes.STRING(50),
                numero: DataTypes.STRING(50),
                bairro: DataTypes.STRING(50), 
                cidade: DataTypes.STRING(50), 
                estado: DataTypes.STRING(50),
                complemento: DataTypes.STRING(50), 
                
            },
            {
                sequelize,
                tableName:'tb_endereco',
            }
        );

    }
    static associate(models){
        Endereco.hasOne(models.Empresa),
        Endereco.hasOne(models.Loja)
    }
}

module.exports = Endereco;