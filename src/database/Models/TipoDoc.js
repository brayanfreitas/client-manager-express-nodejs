const {Model, DataTypes} = require("sequelize");

class TipoDoc extends Model {
    static init(sequelize){
        super.init(
            {
                tipo_doc: DataTypes.STRING               
                
            },
            {
                sequelize,
                tableName:'tb_tipo_doc',
            }
        );

    }
    static associate(models){
        TipoDoc.hasMany(models.Cliente)
    }
}
module.exports = TipoDoc;