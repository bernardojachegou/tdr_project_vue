const db = require("./db");

async function dropTables() {
  await db.connect();
  await db.query("DROP TABLE tdr_devs CASCADE");
  await db.end();

  console.log("Tables erased!");
}

dropTables();
