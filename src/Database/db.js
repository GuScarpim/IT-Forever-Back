async function connect() {
  // if (global.connection && global.connection.state !== 'disconnected') {
  //   return global.connection;
  // }

  const mysql = require("mysql2/promise");
  const connection = mysql.createConnection({
    host: 'mysql742.umbler.com',
    user: 'guscarpim',
    password: 'mipracs123',
    port: '41890',
    database: 'foreverit'
  })
  console.log('Conectou');
  // global.connection = connection;
  return connection;
}

module.exports = connect;

