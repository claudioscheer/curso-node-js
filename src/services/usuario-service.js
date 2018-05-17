const conexaoService = require('./conexao-service');

module.exports.buscarUsuarios = () =>
  new Promise(async (resolve, reject) => {
    const connection = await conexaoService.getPool();
    connection.query(
      'SELECT * FROM usuario ORDER BY usuario.nome ASC', [],
      (error, results) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      },
    );
  });

module.exports.salvarUsuario = usuario =>
  new Promise(async (resolve, reject) => {
    const connection = await conexaoService.getPool();
    connection.query(
      'INSERT INTO usuario SET ?', { nome: usuario.nome, idade: usuario.idade },
      (error, results) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      },
    );
  });