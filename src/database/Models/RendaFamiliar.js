const {Model, DataTypes} = require("sequelize");

class RendaFamiliar extends Model {
    static init(sequelize){
        super.init(
            {
                renda_familiar: DataTypes.DECIMAL(10,2)               
            },
            {
                sequelize,
                tableName:'tb_estado_civil',
            }
        );
    }
    static associate(models){
        RendaFamiliar.hasMany(models.Cliente)
    }
}

module.exports = RendaFamiliar;