const Sequelize = require('sequelize');
const { Database } = require('../../../core/database.service');

const Model = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    license_plate: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
};

module.exports = {
  User: Model(Database.sequelize, Sequelize),
};
