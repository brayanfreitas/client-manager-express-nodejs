
const Joi = require('joi')


const schemas = {
    cliente_data: Joi.object({ 
          cliente:{
            nome_cliente: Joi.string(),
            cpf_cliente: Joi.string(),
            sexo: Joi.string(),
            estado_civil_id: Joi.number(),
            naturalidade: Joi.string(),
            nacionalidade_id: Joi.number().integer(),
            tipo_doc_id: Joi.number().integer(),
            num_doc: Joi.string(),
            org_emissor: Joi.string(),
            uf_org_emissor: Joi.string(),
            data_emissao: Joi.string(),
            nome_mae: Joi.string(),
            telefone_fixo: Joi.string(),
            celular: Joi.string(),
            email: Joi.string(),
            ocupacao: Joi.string(),
            end_profissional: Joi.string(),
            tel_profissional:Joi.string(),
            salario: Joi.string(),
            referencia_comercial: Joi.string(),
            contato_ref_comercial: Joi.string(),
            referencia_pessoal: Joi.string(),
            contato_ref_pessoal: Joi.string(),
            renda_familiar_id: Joi.string(),
            frequencia_compra_carne: Joi.string(),
            local_compra: Joi.string(),
            data_ultima_compra: Joi.string()
          },
          endereco: Joi.object({
            cep: Joi.string().empty().required(),
            rua: Joi.string(),
            numero: Joi.number().integer(),
            bairro: Joi.string().max(2),
            cidade: Joi.string(),
            estado: Joi.string(),
            complemento: Joi.string(),
        })
      }),
};




/*const cliente_schema = [
    body('nome').isEmpty().isAlpha().trim().required(),
    body('cpf'),
    body('sexo'),
    body('estadoCivil'),
    body('naturalidade'),
    body('nacionalidade'),
    body('tipoDoc'),
    body('numDoc'),
    body('orgEmissor'),
    body('ufOrg'),
    body('nomeMae'),
    body('cep'),
    body('rua'),
    body('numRua'),
    body('estado'),
    body('bairro'),
    body('cidade'),
    body('complemento'),
    body('telFixo'),
    body('celular'),
    body('email').isEmail(),
    body('ocupacao'),
    body('endProfissional'),
    body('telProfissional'),
    body('salario'),
    body('refComercial'),
    body('contato1'),
    body('refPessoal'),
    body('contato2')
]*/

module.exports = schemas;