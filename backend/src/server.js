const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const server = express();
const bodyParser = require('body-parser');

server.use(cors());
server.use(routes);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(3000, () => {
  console.log('server is running');
});
