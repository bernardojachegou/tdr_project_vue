const db = require('../config/db');

module.exports = {
  all() {
    return db.query(`SELECT * from tdr_devs`);
  },

  create(data) {
    const query = `
      INSERT INTO tdr_devs (
        nome,
        nascimento,
        cpf
      ) VALUES ($1, $2, $3)
      RETURNING id
    `;

    const values = [data.nome, data.nascimento, data.cpf];

    return db.query(query, values);
  },

  update(data) {
    const query = `
      UPDATE tdr_devs SET
        nome=($1),
        nascimento=($2),
        cpf=($3)
        WHERE id = $4
    `;

    const values = [data.nome, data.nascimento, data.cpf, data.id];
    return db.query(query, values);
  },

  delete(id) {
    return db.query(`DELETE FROM tdr_devs WHERE id = $1`, [id]);
  },
};
