window.addEventListener("DOMContentLoaded", () => {

  $("#formEmpresa").on("submit", (event) => {
    event.preventDefault();
    //empresa
    const razao_social = $("#inputRazaoSocial").val();
    const cnpj = $("#inputCnpj").val();
    const nome_fantasia = $("#inputNomeFantasia").val();
    const inscricao_estadual = $("#inputInscricaoEstadual").val();
    const inscricao_municipal = $("#inputInscricaoMunicipal").val();
    const email_empresa = $("#inputEmailEmpresa").val();

    //endereço da empresa
    const cep = $("#inputCepEmpresa").val();
    const rua = $("#inputRuaEmpresa").val();
    const numero = $("#inputNumeroEmpresa").val();
    const bairro = $("#inputBairroEmpresa").val();
    const cidade = $("#inputCidadeEmpresa").val();
    const estado = $("#inputUfEmpresa").val();
    const complemento = $("#inputComplementoEmpresa").val();

    // variaveis socio
    const nome_socio = $("#inputNomeSocio").val();
    const cpf_socio = $("#inputCpf").val();
    const cep_socio = $("#inputCep").val();
    const rua_socio = $("#inputRuaSocio").val();
    const numero_socio = $("#inputNumero").val();
    const bairro_socio = $("#inputBairro").val();
    const cidade_socio = $("#inputCidade").val();
    const uf_socio = $("#inputUf").val();
    const tel_socio = $("#inputTelefoneSocio").val();
    const complemento_socio = $("#inputComplementoSocio").val();
    const endereco_socio = rua_socio + " " + numero_socio;

    //reposponsavel contrato
    const responsavel = $("#inputResponsavel").val();
    const telefone_responsavel = $("#inputTelefoneResponsavel").val();
    const email_reponsavel = $("#inputEmailResponsavel").val();
    const usuario_spc = $("#inputTAcessoAoSpc").val();
    const senha_spc = $("#inputTSenhaSpc").val();

    //VALIDAR

    const info = {
      empresa: [
        {
          razao_social: razao_social,
          cnpj_empresa: cnpj,
          nome_fantasia: nome_fantasia,
          inscricao_estadual: inscricao_estadual,
          inscricao_municipal: inscricao_municipal,
          email_empresa: email_empresa,
        },
      ],
      socio: [
        {
          nome_socio: nome_socio,
          cpf_socio: cpf_socio,
          telefone_socio: tel_socio,
          endereco_socio: endereco_socio,
          bairro_socio: bairro_socio,
          cep_socio: cep_socio,
          cidade_socio: cidade_socio,
          estado_socio: uf_socio,
          complemento_socio: complemento_socio,
        },
      ],
      responsavel: [
        {
          nome_responsavel: responsavel,
          telefone_responsavel: telefone_responsavel,
          email_responsavel: email_reponsavel,
          usuario_spc: usuario_spc,
          senha_spc: senha_spc,
        },
      ],
      endereco: [
        {
          cep: cep,
          rua: rua,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          complemento: complemento,
        },
      ],
    };
    return fetch("/cadastrarEmpresa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ info }),
    })
      .then(function (response) {
        clearForms();
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  });
  $("#formLoja").on("submit", (event) => {
    event.preventDefault;
    const empresa_id = $("#idSelect").val();
    const loja = $("#inputNomeEmpresa").val();
    const cnpj = $("#inputCnpjLoja").val();
    const cep = $("#inputCep").val();
    const rua = $("#inputRua").val();
    const bairro = $("#inputBairro").val();
    const cidade = $("#inputCidade").val();
    const estado = $("#inputEstado").val();
    const complemento = $("#inputComplemento").val();

    if (!loja) {
    }

    const info = {
      loja: [
        {
          empresa_id: empresa_id,
          nome_loja: loja,
          cnpj_loja: cnpj,
        },
      ],
      endereco: [
        {
          cep: cep,
          rua: rua,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          complemento: complemento,
        },
      ],
    };

    fetch("/cadastrarLoja", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ info }),
    })
      .then(function (response) {
        clearForms();
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  });
  $("#formLojista").on("submit", (event) => {
    event.preventDefault();
    const cpf = $("#input").val();
    const nome = $("#inputNome").val();
    const usuario = $("#inputUsuario").val();
    const senha = $("#inputSenha").val();
    const loja_id = $("#idSelect").val();

    const info = {
      cpf: cpf,
      nome: nome,
      usuario: usuario,
      senha: senha,
      loja_id: loja_id,
    };

    fetch("/cadastrarLojista", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ info }),
    })
      .then(function (response) {
        clearForms();
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  });
  $("#formCliente").on("submit", (event) => {
    event.preventDefault();
    const loja = $("#idSelect").val();
    const nome = $("#nome").val();
    const cpf = $("#cpf").val();
    const sexo = $("#sexo").val();
    const estado_civil = $("#estadoCivil").val();
    const naturalidade = $("#naturalidade").val();
    const nacionalidade = $("#nacionalidade").val();
    const tipo_doc = $("#tipoDoc").val();
    const num_doc = $("#numeroDoc").val();
    const org_emissor = $("#orgEmissor").val();
    const uf_org_emissor = $("#ufOrg").val();
    const data_emissao = $("#dataEmissao").val();
    const nome_mae = $("#nomeMae").val();
    const cep = $("#cep").val();
    const rua = $("#rua").val();
    const estado = $("#inputEstado").val();
    const numero = $("#numRua").val();
    const bairro = $("#bairro").val();
    const cidade = $("#cidade").val();
    const complemento = $("#complemento").val();
    const tel_fixo = $("#telFixo").val();
    const celular = $("#celular").val();
    const email = $("#email").val();
    const ocupacao = $("#ocupacao").val();
    const end_profissional = $("#endProfissional").val();
    const tel_profissional = $("#telProfissional").val();
    const salario = $("#salario").val();
    const ref_comercial = $("#refComercial").val();
    const contato_comercial = $("#contato1").val();
    const ref_pessoal = $("#refPessoal").val();
    const contato_pessoal = $("#contato2").val();
    const renda_familiar = $("#rendaFamiliar").val();
    const frequencia_compra = $("#freqCompra").val();
    const local_compra = $("#localCompra").val();
    const data_ultima_compra = $("#dataUltimaCompra").val();
    const info = {
      cliente:{
        loja_id: loja,
        nome_cliente: nome,
        cpf_cliente: cpf,
        sexo: sexo,
        estado_civil_id: 1,
        naturalidade: naturalidade,
        nacionalidade_id: nacionalidade,
        tipo_doc_id: tipo_doc,
        num_doc: num_doc,
        org_emissor: org_emissor,
        uf_org_emissor: uf_org_emissor,
        data_emissao: "2017-05-05",
        nome_mae: nome_mae,
        telefone_fixo: tel_fixo,
        celular: celular,
        email: email,
        ocupacao: ocupacao,
        end_profissional: end_profissional,
        tel_profissional: tel_profissional,
        salario: salario,
        referencia_comercial: ref_comercial,
        contato_ref_comercial: contato_comercial,
        referencia_pessoal: ref_pessoal,
        contato_ref_pessoal: contato_pessoal,
        renda_familiar_id: "3",
        frequencia_compra_carne: frequencia_compra,
        local_compra: local_compra,
        data_ultima_compra: "2017-05-05"
      },
      endereco:
      {
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        complemento: complemento,
      },      
    };
    console.log(info);
    fetch("/cadastrarCliente", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ info }),
    })
      .then(function (response) {
        clearForms();
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  });
  $("#formEditarCliente").on("submit", (event) => {
    event.preventDefault();
    const nome = $("#nome").val();
    const cpf = $("#cpf").val();
    const sexo = $("#sexo").val();
    const estado_civil = $("#estadoCivil").val();
    const naturalidade = $("#naturalidade").val();
    const nacionalidade = $("#nacionalidade").val();
    const tipo_doc = $("#tipoDoc").val();
    const num_doc = $("#numeroDoc").val();
    const org_emissor = $("#orgEmissor").val();
    const uf_org_emissor = $("#ufOrg").val();
    const data_emissao = $("#dataEmissao").val();
    const nome_mae = $("#nomeMae").val();
    const cep = $("#cep").val();
    const rua = $("#rua").val();
    const estado = $("#inputEstado").val();
    const numero = $("#numRua").val();
    const bairro = $("#bairro").val();
    const cidade = $("#cidade").val();
    const complemento = $("#complemento").val();
    const tel_fixo = $("#telFixo").val();
    const celular = $("#celular").val();
    const email = $("#email").val();
    const ocupacao = $("#ocupacao").val();
    const end_profissional = $("#endProfissional").val();
    const tel_profissional = $("#telProfissional").val();
    const salario = $("#salario").val();
    const ref_comercial = $("#refComercial").val();
    const contato_comercial = $("#contato1").val();
    const ref_pessoal = $("#refPessoal").val();
    const contato_pessoal = $("#contato2").val();
    const renda_familiar = $("#rendaFamiliar").val();
    const frequencia_compra_carne = $("#freqCompra").val();
    const local_compra = $("#localCompra").val();
    const data_ultima_compra = $("#dataUltimaCompra").val();
    const id = localStorage.getItem("id");
    console.log(estado_civil);
    const info = {
      cliente: [
        {
          nome_cliente: nome,
          cpf_cliente: cpf,
          sexo: sexo,
          estado_civil_id: "2",
          naturalidade: naturalidade,
          nacionalidade_id: nacionalidade,
          tipo_doc_id: tipo_doc,
          num_doc: num_doc,
          org_emissor: org_emissor,
          uf_org_emissor: uf_org_emissor,
          data_emissao: "2018/05/05",
          nome_mae: nome_mae,
          telefone_fixo: tel_fixo,
          celular: celular,
          email: email,
          ocupacao: ocupacao,
          end_profissional: end_profissional,
          tel_profissional: tel_profissional,
          salario: salario,
          referencia_comercial: ref_comercial,
          contato_ref_comercial: contato_comercial,
          referencia_pessoal: ref_pessoal,
          contato_ref_pessoal: contato_pessoal,
          renda_familiar_id: "3",
          frequencia_compra_carne: frequencia_compra_carne,
          local_compra: local_compra,
          data_ultima_compra: "2018/05/05",
        },
      ],
      endereco: [
        {
          cep: cep,
          rua: rua,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          complemento: complemento,
        },
      ],
    };
    fetch("/salvarEdit/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ info }),
    })
      .then(function (response) {
        clearForms();
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function clearForms() {
    $(":input")
      .not(":button, :submit, :reset, :hidden, :checkbox, :radio")
      .val("");
    $(":checkbox, :radio").prop("checked", false);
    //window.location.reload();
  }
});
