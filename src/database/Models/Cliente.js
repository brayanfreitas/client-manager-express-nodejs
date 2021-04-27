const {Model, DataTypes} = require('sequelize');

class Cliente extends Model{
    static init(sequelize){
        super.init(
            {
                nome_cliente:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    validade:{
                        isAlpha: true,
                        notEmpty: true,
                        notNull: true,
                    }
                },
                cpf_cliente: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    notEmpty: true, 
                    validade: {
                        isNumeric: true, 
                        notNull:  true, 
                        notEmpty: true
                    }
                },
                sexo:{
                    type: DataTypes.STRING,
                    allowNull: false,
                    validade:{
                        isAlpha: true, 
                        notEmpty: true
                    }  
                },
                naturalidade: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validade:{
                        isAlpha: true,
                        notEmpty: true
                    }
                },
                num_doc: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validade:{
                        isAlphaNumeric: true,
                        notEmpty: true
                    }
                },
                org_emissor: DataTypes.STRING,
                data_emissao:{
                    type: DataTypes.DATEONLY,
                    allowNull: false,
                    validade:{
                        isDate: true,
                        notEmpty: true                        
                    }
                },
                nome_mae: {
                    type: DataTypes.STRING, 
                    allowNull: true,
                    validade: {
                        isAlpha: true,
                                              
                    }
                },
                telefone_fixo: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade:{
                        isNumeric: true, 
                    }
                },
                celular: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade: {
                        isNumeric: true, 
                    }
                },
                email: {
                    type: DataTypes.STRING, 
                    allowNull: true, 
                    validade: {
                        isEmail: true, 
                    }
                },
                ocupacao: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade: {
                        isAlpha: true,
                        notEmpty: true
                    }
                },
                endereco_profissional: {
                    type: DataTypes.STRING, 
                    allowNull: true, 
                    validade:{
                        isAlpha: true, 
                    }
                },
                telefone_profissional: {
                    type: DataTypes.STRING, 
                    allowNull: true, 
                    validade: {
                        isNumeric: true
                    },
                },
                salario: {
                    type: DataTypes.DECIMAL(10,2),
                    allowNull: false, 
                    validade: {
                        isDecimal: true,
                        isNull: false,
                        notEmpty: true
                    }
                },
                referencia_comercial: {
                    type: DataTypes.STRING, 
                    allowNull: true, 
                    validade: {
                        isAlpha: true
                    }
                },
                contato_ref_comercial:{ 
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                referencia_pessoal:{ 
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade: {
                        notEmpty: false, 

                    }
                },
                contato_ref_pessoal: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                },
                frequencia_compra_carne: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade: {
                        isNumeric: true
                    }
                },
                local_compra: {
                    type: DataTypes.STRING,
                    allowNull: true, 
                    validade: {
                        isNumeric: true
                    }
                },
                data_ultima_compra: {
                    type: DataTypes.DATEONLY,
                    allowNull: true, 
                    validade: {
                        isDate: true
                    }
                },
            },
            {
                sequelize,
                tableName: 'tb_cliente'
            }
        );
    }
    static associate(models){
        Cliente.belongsTo(models.EstadoCivil, {
            foreignKey: 'estado_civil_id',
            as: 'estado_civil'
        }),
        Cliente.belongsTo(models.Nacionalidade,{
            foreignKey: 'nacionalidade_id',
            as: 'nacionalidade'
        }),
        Cliente.belongsTo(models.TipoDoc,{
            foreignKey: 'tipo_doc_id',
            as: 'tipo_doc'
        }),
        Cliente.belongsTo(models.Endereco,{
            foreignKey: 'endereco_id',
            as: 'endereco'
        }),
        Cliente.belongsTo(models.RendaFamiliar,{
            foreignKey: 'renda_familiar_id',
            as: 'renda_familiar'
        }),
        Cliente.belongsTo(models.Loja,{
            foreignKey: "loja_id",
            as: 'loja'
        })
    }  
}
module.exports = Cliente;