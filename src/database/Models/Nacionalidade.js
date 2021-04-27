const {Model, DataTypes} = require("sequelize");

class Nacionalidade extends Model {
    static init(sequelize){
        super.init(
            {
                nacionalidade: DataTypes.STRING               
                
            },
            {
                sequelize,
                tableName:'tb_nacionalidade',
            }
        );

    }
    static associate(models){
        Nacionalidade.hasMany(models.Cliente)
    }
}
module.exports = Nacionalidade;