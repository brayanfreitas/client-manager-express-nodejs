const Cliente = require("../database/Models/Cliente");
const Endereco = require("../database/Models/Endereco");
const excel = require('exceljs');

class ClienteController {
  async store(req, res) {
    const {
      loja_id,
      nome_cliente,
      cpf_cliente,
      sexo,
      estado_civil_id,
      naturalidade,
      nacionalidade_id,
      tipo_doc_id,
      num_doc,
      org_emissor,
      uf_org_emissor,
      data_emissao,
      nome_mae,
      telefone_fixo,
      celular,
      email,
      ocupacao,
      end_profissional,
      tel_profissional,
      salario,
      referencia_comercial,
      contato_ref_comercial,
      referencia_pessoal,
      contato_ref_pessoal,
      renda_familiar_id,
      frequencia_compra_carne,
      local_compra,
      data_ultima_compra,
    } = req.body.info.cliente;
    const {
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
    } = req.body.info.endereco;
    try
    {
      const cliente = Cliente.create(
        {
          loja_id,
          nome_cliente,
          cpf_cliente,
          sexo,
          estado_civil_id,
          naturalidade,
          nacionalidade_id,
          tipo_doc_id,
          num_doc,
          org_emissor,
          uf_org_emissor,
          data_emissao,
          nome_mae,
          telefone_fixo,
          celular,
          email,
          ocupacao,
          end_profissional,
          tel_profissional,
          salario,
          referencia_comercial,
          contato_ref_comercial,
          referencia_pessoal,
          contato_ref_pessoal,
          renda_familiar_id,
          frequencia_compra_carne,
          local_compra,
          data_ultima_compra,
          endereco: [
            {
              cep,
              rua,
              numero,
              bairro,
              cidade,
              estado,
              complemento,
            },
          ],
        },
        {
          include: [
            {
              model: Endereco,
              as: "endereco",
            },
          ],
        }
      );
      return res.json(cliente);
    }catch (err){
      res.status(500).send({error: err, msg: "Não foi possível cadastrar o cliente"})
    }        
  }
  async index(req, res) {
    const cliente = await Cliente.findAll({
      raw: true,
      attributes: ["id", "nome_cliente", "cpf_cliente", "email", "celular", "updated_at"],
    });
    res.json(cliente);
  }
  async update(req, res) {
    const {
      nome_cliente,
      cpf_cliente,
      sexo,
      estado_civil_id,
      naturalidade,
      nacionalidade_id,
      tipo_doc_id,
      num_doc,
      org_emissor,
      uf_org_emissor,
      data_emissao,
      nome_mae,
      telefone_fixo,
      celular,
      email,
      ocupacao,
      end_profissional,
      tel_profissional,
      salario,
      referencia_comercial,
      contato_ref_comercial,
      referencia_pessoal,
      contato_ref_pessoal,
      renda_familiar_id,
      frequencia_compra_carne,
      local_compra,
      data_ultima_compra,
    } = req.body.info.cliente[0];
    const {
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
    } = req.body.info.endereco[0];
    const id = req.params.id;
     const cliente = await Cliente.create(
      {
        nome_cliente,
        cpf_cliente,
        sexo,
        estado_civil_id,
        naturalidade,
        nacionalidade_id,
        tipo_doc_id,
        num_doc,
        org_emissor,
        uf_org_emissor,
        data_emissao,
        nome_mae,
        telefone_fixo,
        celular,
        email,
        ocupacao,
        end_profissional,
        tel_profissional,
        salario,
        referencia_comercial,
        contato_ref_comercial,
        referencia_pessoal,
        contato_ref_pessoal,
        renda_familiar_id,
        frequencia_compra_carne,
        local_compra,
        data_ultima_compra,
        endereco: [
          {
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento,
          },
        ],
      },
      {
        include: [
          {
            model: Endereco,
            as: "endereco",
          },
        ],
      }
    ).then(()=>{
      Cliente.destroy(
        {
        where:{
          id: id
        }
      });

    });
    console.log(cliente)
    return res.json(cliente);     
    
    
  }
  async delete(req, res){
    const cliente = await Cliente.destroy({
      where:{
        id: req.params.id
      }
    })
  }
  async download(req, res){
    await Cliente.findAll({
      raw: true,
      attributes: ["id", "nome_cliente", "cpf_cliente", "email", "celular"],
    }).then((clientes)=>{     
    
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("Clientes");

      worksheet.columns = [
        {header: "Nome", key: "nome_cliente", width: 40},
        {header: "CPF", key: "cpf_cliente", width: 30},
        {header: "Email", key: "email", width: 40},
        {header: "Celular", key: "celular", width: 25}
      ];
      worksheet.addRows(clientes);
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=" + "clientes.xlsx"
      );
  
      return workbook.xlsx.write(res).then(function () {
        res.status(200).end();
      });

    })
    
  }
}
module.exports = new ClienteController();
