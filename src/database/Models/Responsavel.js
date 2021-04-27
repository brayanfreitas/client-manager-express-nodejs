const { Model, DataTypes } =  require('sequelize');


class Responsavel extends Model {
    static init(sequelize){
        super.init(
            {
                nome_responsavel: DataTypes.STRING(50),
                telefone_responsavel: DataTypes.STRING(50),
                email_responsavel: DataTypes.STRING(50),
                usuario_spc: DataTypes.STRING(30),
                senha_spc: DataTypes.STRING(30)
            },
            {
                sequelize,
                tableName: 'tb_responsavel',
            }
        );
    }
    static associate(models){
        Responsavel.hasOne(models.Empresa)
    }
}
module.exports = Responsavel;