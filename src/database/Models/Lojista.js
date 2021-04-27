const {Model, DataTypes} = require('sequelize');

class Lojista extends Model {
    static init(sequelize){
        super.init({
            cpf: DataTypes.STRING(20),
            nome: DataTypes.STRING(50),
            usuario: DataTypes.STRING(40),
            senha: DataTypes.STRING(100)
        },
        {
            sequelize,
            tableName: 'tb_lojista'
        })
    }
    static associate(models){
        Lojista.belongsTo(models.Loja, {
            foreignKey: 'loja_id',
            as: 'loja'
        })
    }
}
module.exports = Lojista;