const mysql = require('mysql');

const config = require('../config.json');

const pool = mysql.createPool(config.connection);

module.exports.getPool = () => pool;

module.exports.getConnection = () =>
  new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (!error) {
        resolve(connection);
      } else {
        reject(error);
      }
    });
  });

module.exports.closePoolConnections = () =>
  new Promise((resolve, reject) => {
    pool.end((error) => {
      if (!error) {
        resolve(true);
      } else {
        reject(error);
      }
    });
  });
