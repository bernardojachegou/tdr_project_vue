const db = require("./db");

async function createTables() {
  await db.connect();
  await db.query(`CREATE TABLE tdr_devs(
    id serial PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    nascimento timestamp without time zone NOT NULL,
    cpf VARCHAR(15) NOT NULL
  )`);
  await db.end();

  console.log("Tables created!");
}

createTables();
