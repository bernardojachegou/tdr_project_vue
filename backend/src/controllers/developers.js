const Developer = require('../models/Developer');

module.exports = {
  async index(request, response) {
    let results = await Developer.all();
    const developers = results.rows;

    return response.status(302).json(developers);
  },

  async post(request, response) {
    const data = request.body;
    await Developer.create(data);

    return response.status(201).json(data);
  },

  async put(request, response) {
    const devId = request.params.id;
    const data = request.body;

    let results = await Developer.update({
      id: devId,
      nome: data.nome,
      nascimento: data.nascimento,
      cpf: data.cpf,
    });

    return response.status(201).json(results.rows);
  },

  async delete(request, response) {
    const devId = request.params.id;

    if (!devId) {
      return response
        .status(404)
        .json({ error: true, message: 'Dev não encontrado' });
    } else {
      await Developer.delete(devId);
      return response
        .status(200)
        .json({ error: false, message: 'Successfully deleted' });
    }
  },
};
