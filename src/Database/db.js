async function connect() {
  // if (global.connection && global.connection.state !== 'disconnected') {
  //   return global.connection;
  // }

  const mysql = require("mysql2/promise");
  const connection = mysql.createConnection({
    host: 'nome do seu host',
    user: 'nome do seu usuário',
    password: 'senha',
    port: 'porta',
    database: 'nome do seu banco de dados'
  })
  console.log('Conectou');
  // global.connection = connection;
  return connection;
}

module.exports = connect;

