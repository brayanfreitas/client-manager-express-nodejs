const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Empresa = require('./Models/Empresa');
const Socio = require('./Models/Socio');
const Endereco = require('./Models/Endereco');
const Responsavel = require('./Models/Responsavel');
const Loja = require('./Models/Loja');
const Lojista = require('./Models/Lojista');
const Cliente = require('./Models/Cliente');
const EstadoCivil = require('./Models/EstadoCivil');
const Nacionalidade = require('./Models/Nacionalidade');
const RendaFamiliar = require('./Models/RendaFamiliar');
const TipoDoc = require('./Models/TipoDoc');
 
const connection = new Sequelize(databaseConfig);

Socio.init(connection);
Responsavel.init(connection);
Endereco.init(connection);
Empresa.init(connection);
Loja.init(connection);
Lojista.init(connection);
EstadoCivil.init(connection);
Nacionalidade.init(connection);
RendaFamiliar.init(connection);
TipoDoc.init(connection);
Cliente.init(connection);

Empresa.associate(connection.models);
Socio.associate(connection.models);
Responsavel.associate(connection.models);
Endereco.associate(connection.models);
Loja.associate(connection.models),
Lojista.associate(connection.models);
EstadoCivil.associate(connection.models);
Nacionalidade.associate(connection.models);
RendaFamiliar.associate(connection.models);
TipoDoc.associate(connection.models);
Cliente.associate(connection.models);


module.exports = connection;