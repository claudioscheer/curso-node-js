const mysql = require('mysql');

const pool = mysql.createPool({
  "host": "127.0.0.1",
  "port": 3306,
  "database": "react_node",
  "user": "root",
  "password": "",
});

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
