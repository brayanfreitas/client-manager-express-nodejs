const express = require("express");
const routes = express.Router();
const serviceAccount = require("../serviceAccountKey.json");
const admin = require("firebase-admin");
const schemas = require("./schema/schemas");
const validaDados = require("./middlewares/validacao-helper");
require("./database");

admin.initializeApp({
  credential: 'credential,
  databaseURL: "databaseUrlFirebase",
});
var db = admin.database();

const EmpresaController = require("./controllers/EmpresaController");
const LojaController = require("./controllers/LojaController");
const LojistaController = require("./controllers/LojistaController");
const ClienteController = require("./controllers/ClienteController");

//Rotas
routes.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});
//GETS
  routes.get("/userPage", function (req, res) {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true /** checkRevoked */)
      .then((user) => {
        var dbUser = db.ref("users/" + user.uid);
        dbUser.on("value", (data) => {
          if (data.val().funcao == "adm") {
            res.render("adm", {
              isAdm: true,
              layout: "userspages",
              template: "hold-transition sidebar-mini layout-fixed",
              username: data.val().nome,
              userimage: "img/avatar2.png",
            });
          } else if (data.val().funcao == "lojista") {
            res.render("lojista", {
              isAdm: false,
              layout: "userspages",
              template: "hold-transition sidebar-mini layout-fixed",
              username: data.val().nome,
              userimage: "img/avatar2.png",
            });
          } else {
            alert("Usuário não cadastrado");
          }
        });
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  routes.get("/", function (req, res) {
    res.render("login", {
      layout: "main",
      template: "hold-transition login-page container-fluid",
    });
  });
  routes.get("/login", function (req, res) {
    res.render("login", {
      layout: "main",
      template: "hold-transition login-page container-fluid",
    });
  });
  routes.get("/cadastroEmpresa", checaCookies, function (req, res) {
    var ref = db.ref("users/" + req.decodeClaims.uid);
    ref.on("value", (data) => {
      res.render("cadastrar-empresa", {
        isAdm: true,
        layout: "userspages",
        template: "hold-transition sidebar-mini layout-fixed",
        username: data.val().nome,
        userimage: "img/avatar2.png",
      });
    });
  });
  routes.get(
    "/cadastroLoja",
    checaCookies,
    EmpresaController.index,
    function (req, res) {
      var ref = db.ref("users/" + req.decodeClaims.uid);
      ref.on("value", (data) => {
        res.render("cadastrar-loja", {
          isAdm: true,
          layout: "userspages",
          template: "hold-transition sidebar-mini layout-fixed",
          username: data.val().nome,
          userimage: "img/avatar2.png",
          empresa: res.locals.empresa,
        });
      });
    }
  );
  routes.get(
    "/cadastroLojista",
    checaCookies,
    LojaController.index,
    function (req, res) {
      var ref = db.ref("users/" + req.decodeClaims.uid);
      ref.on("value", (data) => {
        res.render("cadastrar-lojista", {
          isAdm: true,
          layout: "userspages",
          template: "hold-transition sidebar-mini layout-fixed",
          username: data.val().nome,
          userimage: "img/avatar2.png",
          loja: res.locals.loja,
        });
      });
    }
  );
  routes.get(
    "/cadastroCliente",
    checaCookies,
    LojaController.index,
    function (req, res) {
      var ref = db.ref("users/" + req.decodeClaims.uid);
      ref.on("value", (data) => {
        res.render("cadastrar-cliente", {
          isAdm: false,
          layout: "userspages",
          template: "hold-transition sidebar-mini layout-fixed",
          username: data.val().nome,
          userimage: "img/avatar2.png",
          loja: res.locals.loja,
        });
      });
    }
  );
  routes.get("/listarFormulario", checaCookies, function (req, res) {
    var ref = db.ref("users/" + req.decodeClaims.uid);
    ref.on("value", (data) => {
      res.render("listar-formularios", {
        isAdm: true,
        layout: "userspages",
        template: "hold-transition sidebar-mini layout-fixed",
        username: data.val().nome,
        userimage: "img/avatar2.png",
      });
    });
  });
  routes.get("/sessionLogout", (req, res) => {
    res.clearCookie("session");
    res.redirect("/login");
  });
  routes.get("/atualizarCliente", checaCookies, (req, res) => {
    var ref = db.ref("users/" + req.decodeClaims.uid);
    ref.on("value", (data) => {
      res.render("editar-cliente", {
        isAdm: true,
        layout: "userspages",
        template: "hold-transition sidebar-mini layout-fixed",
        username: data.val().nome,
        userimage: "/img/avatar2.png",
      });
    });
  });
  routes.get("/tabelaCliente", ClienteController.index);

//POSTS
  routes.post("/sessionLogin", (req, res) => {
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true };
          res.cookie("session", sessionCookie, options);
          res.end(JSON.stringify({ status: "success" }));
        },
        (error) => {
          res.status(401).send("Requisição Não Autorizada!");
        }
      );
  });
  routes.post("/cadastrarEmpresa", EmpresaController.store);
  routes.post("/cadastrarLoja", LojaController.store);
  routes.post("/cadastrarLojista", criaUsuarioFirebase, LojistaController.store);
  routes.post("/cadastrarCliente", validaDados(schemas.cliente_data));

//Deletes
  routes.delete("/excluirClientes/:id", ClienteController.delete);
//Updates
  routes.put("/salvarEdit/:id", ClienteController.update);
//download excel
  routes.get("/baixarExcel", ClienteController.download);

//funções
function criaUsuarioFirebase(req, res, next) {
  const { nome, usuario, senha } = req.body.info;
  admin
    .auth()
    .createUser({
      email: usuario,
      password: senha,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      var criaUsuario = db.ref("users/");
      criaUsuario.child(userRecord.uid).set({
        nome: nome,
        funcao: "lojista",
      });
      console.log("Successfully created new user:", userRecord.uid);
      next();
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.redirect("/cadastroLojista");
    });
}
function checaCookies(req, res, next) {
  const sessionCookie = req.cookies.session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((decodeClaims) => {
      req.decodeClaims = decodeClaims;
      next();
    })
    .catch((error) => {
      res.redirect("/login");
    });
}

module.exports = routes;
