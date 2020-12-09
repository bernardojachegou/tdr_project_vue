const db = require("./db");

async function createTables() {
  await db.connect();

  await db.query(`CREATE TABLE tdr_devs(
    id serial PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    nascimento timestamp without time zone NOT NULL,
    cpf integer NOT NULL
  )`);

  await db.end();

  console.log("Tabela criada");
}

createTables();
