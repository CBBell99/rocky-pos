require('dotenv').config();

const fs = require('fs');
const { Client } = require('pg');
const dbParams = require('../lib/db.js');

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const db = new Client({ connectionString: connectionString });

const runSchemaFiles = async () => {
  console.log('-> Loading Schema Files ...');
  const schemaFilenames = fs.readdirSync('./db/postgres/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/postgres/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log('-> Loading Seeds ...');
  const seedFilenames = fs.readdirSync('./db/postgres/seeds');

  for (const fn of seedFilenames) {
    const sql = fs.readFileSync(`./db/postgres/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  try {
    console.log(dbParams.host);
    dbParams.host &&
      console.log(
        `-> Connecting to PG on ${dbParams.host} as ${dbParams.user}...`,
      );
    dbParams.connectionString &&
      console.log(`-> Connecting to PG with ${dbParams.connectionString}...`);
    await db.connect();
    await runSchemaFiles();
    await runSeedFiles();
    db.end();
  } catch (err) {
    console.error(`Failed due to error: ${err}`);
    db.end();
  }
};

runResetDB();
