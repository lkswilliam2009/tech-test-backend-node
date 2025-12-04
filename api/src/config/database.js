const { Pool } = require('pg');
const knex = require('knex')(require('./knexfile'));
const dotenv = require('dotenv');

dotenv.config({ debug: true });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('PostgreSQL terkoneksi !');
});

module.exports = {
  query: (text, params) => pool.query(text, params), knex
};