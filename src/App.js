
(async () => {
  const db = require('./Database/db');
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');

  const cors = require('cors');
  const dotenv = require('dotenv');

  dotenv.config();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const ProdutosRoute = require('./Routes/ProdutosRoute');
  const UserRoute = require('./Routes/UserRoute');

  app.use('/api/v1/user/', ProdutosRoute);
  app.use('/api/v1/profile/', UserRoute);

  const port = process.env.PORT || 3030;

  app.listen(port);
  console.log('conectado a porta ' + port);
})();

