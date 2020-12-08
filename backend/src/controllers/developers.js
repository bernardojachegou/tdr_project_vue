const Developer = require('../models/Developer');

module.exports = {
  async index(request, response) {
    let results = await Developer.all();
    const developers = results.rows;

    return response.status(302).json(developers);
  },
  async post(request, response) {
    const data = request.body;

    let results = await Developer.create(data);

    return response.status(201).json(results);
  },
  async put(resquest, response) {
    const { nome, nascimento, cpf } = request.body;

    const data = {
      nome,
      nascimento,
      cpf,
    };

    let results = Developer.update(data);

    return response.status(201).json(results);
  },
  async delete(request, response) {
    await Developer.delete(request.body.id);

    return response.status(200);
  },
};
