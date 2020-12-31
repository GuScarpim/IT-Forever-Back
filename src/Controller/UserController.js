const connect = require('../Database/db');
const jwt = require('jsonwebtoken');

exports.login = async (request, response) => {
  const conn = await connect();
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    conn.query('SELECT * FROM foreverit.users WHERE username = ? AND password = ?', [username, password])
      .then(res => {
        if (res[0].length > 0) {
          const id = 1;
          const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 2000
          });
          return response.json({ auth: true, token: token });
        } else {
          return response.json({ message: 'Usuário não encontrado!' });
        }
      }).catch(error => {
        return console.log(error);
      })
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
};

exports.getUsers = async (request, response) => {
  const conn = await connect();
  conn.query('SELECT username FROM foreverit.users')
    .then(res => {
      response.json({ data: res[0] });
    }).catch(error => {
      return res.status(500).send(error);
    })
};

exports.logout = async (request, response) => {
  response.json({ auth: false, token: null });
}
