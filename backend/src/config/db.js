const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  password: 'defcon4',
  host: 'localhost',
  port: '5432',
  database: 'tdr_informatica',
});

module.exports = client;
