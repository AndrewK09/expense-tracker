const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    // console.log('Connected to database:', cp.database);
    console.log('Connected to database:');
  },
};
const pgp = require('pg-promise')();
const config = require('../config/config.js');

const db = pgp(config.pgURI);
module.exports = db;
