const {Model, DataTypes} =  require('sequelize');

class Empresa extends Model {
    static init(sequelize){
        super.init(
            {
                razao_social: DataTypes.STRING,
                cnpj_empresa: DataTypes.STRING,
                nome_fantasia: DataTypes.STRING,
                inscricao_estadual: DataTypes.STRING, 
                inscricao_municipal: DataTypes.STRING,
                email_empresa: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: 'tb_empresa'
            }
        );
    }        
    static associate(models){
        Empresa.belongsTo(models.Socio,{
            foreignKey: 'socio_id',
            as: 'socio'
        }),
        Empresa.belongsTo(models.Responsavel,{
            foreignKey: 'responsavel_id',
            as: 'responsavel'
        }),
        Empresa.belongsTo(models.Endereco,{
            foreignKey: 'endereco_id',
            as: 'endereco'
        }),
        Empresa.hasMany(models.Loja)
    }    
}
module.exports = Empresa;