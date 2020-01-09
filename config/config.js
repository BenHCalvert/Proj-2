// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../dotenv') });
require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQL_PSWD,
    database: 'sunnyside_db',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.MYSQL_PSWD,
    database: 'test_sunnyside_db',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};

/*
module.exports = {
    dev: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    }
}

*/
