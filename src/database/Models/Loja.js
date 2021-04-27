const {Model, DataTypes} = require('sequelize');

class Loja extends Model {
    static init(sequelize){
        super.init(
            {
                nome_loja:{
                    type: DataTypes.STRING, 
                    allowNull:false,
                    validate: {
                        isAlpha: true,
                        notEmpyt: true, 
                        notNull: true                 
                    }
                },
                cnpj_loja:{
                    allowNull:false,
                    type: DataTypes.STRING,
                    validade: {
                        isNumeric: true, 
                        notEmpyt: true,
                        notNull: true
                    }
                }
            },
            {
                sequelize,
                tableName: 'tb_loja'

            }
        );
    }
    static associate(models){
        Loja.belongsTo(models.Empresa, {
            foreignKey: 'empresa_id',
            as: 'empresa'
        }),
        Loja.belongsTo(models.Endereco, {
            foreignKey: 'endereco_id',
            as: 'endereco'
        }),
        Loja.hasMany(models.Lojista)
       
    }

}

module.exports = Loja;
