const Sequelize = require('sequelize');
const { Database } = require('../../../core/database.service');
// const { Booking } = require('../../bookings/model/booking.model');

const Model = (sequelize, type) => {
  return sequelize.define(
    'parking_space',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      floor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['floor', 'number'],
        },
      ],
    },
  );
};

const ParkingSpace = Model(Database.sequelize, Sequelize);

module.exports = {
  ParkingSpace,
};
