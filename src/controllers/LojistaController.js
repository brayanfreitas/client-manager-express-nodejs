const Lojista = require("../database/Models/Lojista");

module.exports = {
  async store(req, res) {
    const { loja_id, cpf, nome, usuario, senha } = req.body.info;
    try {
      const lojista = await Lojista.create(
        {
          cpf,
          nome, 
          usuario,
          senha, 
          loja_id         
        }
      );
      return res.json(lojista);
    } catch (error) {
      console.log(error);
    }
  },
  async index(req,res,next){
    try{
      const lojista = Lojista.findAll({
        raw: true,
        attributes:[
          'nome'
        ]
      });
      res.locals.lojista = lojista;
      next();

    }catch(err){

    }

  }
  
};
