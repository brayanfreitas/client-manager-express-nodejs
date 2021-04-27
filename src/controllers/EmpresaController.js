const Empresa = require('../database/Models/Empresa');
const Socio = require('../database/Models/Socio');
const Responsavel = require("../database/Models/Responsavel");
const Endereco = require('../database/Models/Endereco'); 
 
class EmpresaController {
  async store(req, res) {
    const {
      razao_social,
      cnpj_empresa, 
      nome_fantasia,
      inscricao_estadual, 
      inscricao_municipal, 
      email_empresa,
    } = req.body.info.empresa[0];
    const {
      cep,
      rua, 
      numero, 
      bairro, 
      cidade, 
      estado,
      complemento
    } = req.body.info.endereco[0];
    const {
      nome_socio,
      cpf_socio, 
      telefone_socio, 
      endereco_socio, 
      bairro_socio, 
      cidade_socio, 
      estado_socio, 
      complemento_socio
    } = req.body.info.socio[0];
    const {
      nome_responsavel,
      telefone_responsavel,
      email_responsavel, 
      usuario_spc, 
      senha_spc, 
    } = req.body.info.responsavel[0];
    try{
      const empresa = await Empresa.create({
        razao_social, cnpj_empresa, nome_fantasia, inscricao_estadual, inscricao_municipal, email_empresa,        
        socio:[{
          nome_socio,
          cpf_socio, 
          telefone_socio,
          endereco_socio,
          bairro_socio,
          cidade_socio,
          estado_socio,
          complemento_socio
        }],
        responsavel:[{
          nome_responsavel,
          telefone_responsavel,
          email_responsavel, 
          usuario_spc, 
          senha_spc, 
        }],
        endereco:[{
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
          complemento,          
        }]
      },
      {
        include: [{
          model: Socio, as: 'socio',                      
        },
        {
          model: Responsavel, as: 'responsavel',                      
        },
        {
          model: Endereco, as: 'endereco',                      
        }]
      });
        return res.json(empresa);         
    } catch (err) {
      console.log(err);
    }       
  }  
  async index(req, res, next) {
    const empresa = await Empresa.findAll({
      raw: true,
      attributes:[
        'id', 'nome_fantasia'
      ]      
    });
    res.locals.empresa = empresa;
    next();
    
  }
  async delete(req, res) {
    let empresa = await Empresa.findByPk(req.params.id)
    empresa = await empresa.destroy(req.body)
    return res.json(empresa)
  }
  async show(req, res) {
    let empresa = await Empresa.findByPk(req.params.id)
    return res.json(empresa)
  }
}
 module.exports = new EmpresaController();