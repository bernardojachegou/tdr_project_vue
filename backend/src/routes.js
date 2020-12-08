const express = require('express');
const developer = require('../src/controllers/developers');

const routes = express.Router();

// routes.get('/', (request, response) => {
//   response.send('Estou funcionando');
// });

routes.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

routes.get('/developers', developer.index);
routes.post('/developers', developer.post);
routes.put('/developers', developer.put);
routes.delete('/developers:id', developer.delete);

module.exports = routes;
