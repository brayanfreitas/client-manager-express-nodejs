const Loja = require("../database/Models/Loja");
const Endereco = require("../database/Models/Endereco")

module.exports = {
  async store(req, res) {
    const { empresa_id, nome_loja, cnpj_loja } = req.body.info.loja[0];
    const {
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
    } = req.body.info.endereco[0];
    try {
      const loja = await Loja.create(
        {
          nome_loja,
          cnpj_loja,
          empresa_id,
          endereco: [{
              cep,
              rua,
              numero,
              bairro,
              cidade,
              estado,
              complemento,
            }],
        },
        {
          include: [{
              model: Endereco, as: "endereco"
          }],
        }
      );
      return res.json(loja);
    } catch (error) {
      console.log(error);
    }
  },
  async index(req, res,  next) {
    try{
      const loja = await Loja.findAll({
        raw: true,
        attributes:[
          'id', 'nome_loja'
        ]      
      });
      res.locals.loja = loja;
      next();

    }catch(err){
      console.log(err);
    }
  }
    
};
