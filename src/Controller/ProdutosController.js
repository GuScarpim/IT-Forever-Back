const connect = require('../Database/db');

exports.get = async (req, res) => {
  const conn = await connect();
  conn.query('SELECT * FROM crud.produtos;')
    .then((response) => {
      return res.status(200).send(response[0]);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.getId = async (req, res) => {
  const conn = await connect();
  const { id } = req.params;
  conn.query(`SELECT * FROM crud.produtos WHERE id = ${id};`)
    .then((response) => {
      return res.status(200).send(response[0]);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.post = async (req, res) => {
  const obj = req.body;
  // Receber um obj para criação no banco MongoDB
  console.log('obj', obj)
  const conn = await connect();
  const sql = 'INSERT INTO crud.produtos(descricao, valor) VALUES (?, ?);'
  const values = [obj.descricao, obj.valor];
  await conn.query(sql, values)
    .then((ret) => {
      return res.status(201).json('Item cadastrado com sucesso!')
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.put = async (req, res) => {
  const conn = await connect();
  const obj = req.body;
  const { id } = req.params;

  const sql = 'UPDATE crud.produtos SET descricao=?, valor=? WHERE id=?'
  const values = [obj.descricao, obj.valor, id];
  
  await conn.query(sql, values)
    .then((ret) => {
      return res.status(200).json('Dados atualizado com sucesso!')
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.delete = async (req, res) => {
  const conn = await connect();

  const { id } = req.params;
  const sql = 'DELETE FROM crud.produtos WHERE id=?'

  await conn.query(sql, [id])
    .then((ret) => {
      return res.status(200).json('Dados deletado com sucesso!')
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};
