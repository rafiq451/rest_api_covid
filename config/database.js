// import siquelize
const { Sequelize } = require('sequelize');

//* import dotenv dan jalankan
require('dotenv').config();

//* destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

// export db
module.exports = db;
