async function connect() {
  if (global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }

  const mysql = require("mysql2/promise");
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'foreverit'
  })
  console.log('Conectou');
  global.connection = connection;
  return connection;
}

module.exports = connect;
// port: process.env.PORTBD,
