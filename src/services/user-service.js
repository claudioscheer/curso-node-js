const _ = require('lodash');

const connectionService = require('./connection-service');

module.exports.getUsers = () =>
  new Promise(async (resolve, reject) => {
    const connection = await connectionService.getPool();
    connection.query(
      'SELECT * FROM user ORDER BY user.name ASC', [],
      (error, results) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      },
    );
  });

module.exports.saveUser = user =>
  new Promise(async (resolve, reject) => {
    const connection = await connectionService.getPool();
    connection.query(
      'INSERT INTO user SET ?', { name: user.name, age: user.age },
      (error, results) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      },
    );
  });