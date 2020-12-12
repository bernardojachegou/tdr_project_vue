const Developer = require("../models/Developer");

module.exports = {
  async index(request, response) {
    let results = await Developer.all();
    const developers = results.rows;

    return response.json(developers);
  },

  async post(request, response) {
    const data = request.body;
    await Developer.create(data);

    return response.status(201).json(data);
  },

  async put(request, response) {
    const devId = request.params.id;
    const dev = await Developer.retrieve(devId);
    const data = request.body;

    if (!dev) {
      return response
        .status(404)
        .json({ error: true, message: "Dev não encontrado" });
    } else {
      await Developer.update({
        id: devId,
        nome: data.nome,
        nascimento: data.nascimento,
        cpf: data.cpf,
      });
      return response
        .status(201)
        .json({ error: false, message: "Successfully updated" });
    }
  },

  async delete(request, response) {
    const devId = request.params.id;
    const dev = await Developer.retrieve(devId);

    if (!dev) {
      return response
        .status(404)
        .json({ error: true, message: "Dev não encontrado" });
    } else {
      await Developer.delete(devId);
      return response
        .status(200)
        .json({ error: false, message: "Successfully deleted" });
    }
  },
};
