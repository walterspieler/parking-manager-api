const Sequelize = require('sequelize');
const { env } = require('../env');

class Database {
  constructor() {
    this.sequelize = new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
      host: 'localhost',
      dialect: 'mysql',
    });
  }
  connnect() {
    this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }
}

module.exports = { Database: new Database() };
