// @ts-check

const path = require('path');

const migrations = {
  directory: path.join(__dirname, 'server', 'migrations'),
};
const {
  DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD,
} = process.env;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database.sqlite',
    },
    useNullAsDefault: true,
    migrations,
  },
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations,
  },
  production: {
    client: 'pg',
    connection: {
      host: DATABASE_HOST || 'localhost',
      port: DATABASE_PORT || 5432,
      user: DATABASE_USER || 'postgres',
      password: DATABASE_PASSWORD || '',
      database: DATABASE_NAME || 'hexlet-project',
    },
    useNullAsDefault: true,
    migrations,
  },
};
