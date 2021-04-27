const {Model, DataTypes} = require("sequelize");

class EstadoCivil extends Model {
    static init(sequelize){
        super.init(
            {
                estado_civil: DataTypes.STRING               
            },
            {
                sequelize,
                tableName:'tb_estado_civil',
            }
        );
    }
    static associate(models){
        EstadoCivil.hasMany(models.Cliente)
    }
}

module.exports = EstadoCivil;